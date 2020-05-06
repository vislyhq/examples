// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import assert from "assert";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  combineRef,
  exists,
  useEventHandlers,
  useRootProps,
  InteractionState,
  renderChildren,
} from "./_internal_utils";

const snap = (value, steps) => {
  const snapped = steps.find((s) => s.start <= value && s.end >= value);
  return exists(snapped) ? snapped.value : value;
};

const trap = (value, min, max) => {
  return Math.min(max, Math.max(min, value));
};

export class SlideHandler {
  constructor({ rootDOM, thumbDOM, trackDOM, value, max, min, steps }) {
    this.rootDOM = rootDOM;
    this.thumbDOM = thumbDOM;
    this.trackDOM = trackDOM;
    this.value = value;
    this.max = max;
    this.min = min;
    this.steps = steps;
  }

  getNextStep(direction) {
    if (!exists(this.steps)) {
      return undefined;
    }

    const currentIndex = this.steps.findIndex(
      (s) => s.start <= this.value && s.end >= this.value
    );

    if (exists(currentIndex)) {
      const currentStep = this.steps[currentIndex];
      const stepBy =
        this.value === currentStep.value
          ? direction
          : this.value < currentStep.value && direction === 1
          ? 0
          : this.value > currentStep.value && direction === -1
          ? 0
          : direction;
      return this.steps[currentIndex + stepBy];
    }

    return undefined;
  }

  getNextValue(direction) {
    const step = (this.max - this.min) / 10;
    return this.value + direction * step;
  }

  calculateProgressWidth() {
    const progress = (this.value / this.max - this.min) * 100;
    return `${progress}%`;
  }

  calculateThumbLeft() {
    const trackRect = this.trackDOM.getBoundingClientRect();
    const rootRect = this.rootDOM.getBoundingClientRect();
    const thumbRect = this.thumbDOM.getBoundingClientRect();
    const progress = this.value / this.max - this.min;
    const progressWidth = trackRect.width * progress;
    const trackRelativeX = trackRect.x - rootRect.x;
    return trackRelativeX + progressWidth - thumbRect.width / 2;
  }

  updateValueFromPointerEvent(event) {
    const trackRect = this.trackDOM.getBoundingClientRect();
    const touchX = event.x;
    const progress = (touchX - trackRect.x) / trackRect.width;
    const value = this.min + progress * (this.max - this.min);
    const snapped = exists(this.steps) ? snap(value, this.steps) : value;
    return trap(snapped, this.min, this.max);
  }

  updateValueFromStep(direction) {
    const next = this.getNextStep(direction);
    return trap(
      exists(next) ? next.value : this.getNextValue(direction),
      this.min,
      this.max
    );
  }
}
export const calculateSteps = (min, max, stepSize) => {
  const values = [];
  let value = min;

  while (value < max) {
    values.push(value);
    value = value + stepSize;
  }

  values.push(max);
  return values.reduce((sections, value, index) => {
    const prevValue = values[index - 1];
    const nextValue = values[index + 1];
    const start = exists(prevValue) ? value - (value - prevValue) / 2 : value;
    const end = exists(nextValue) ? value + (nextValue - value) / 2 : value;
    return [
      ...sections,
      {
        start: start,
        end: end,
        value,
      },
    ];
  }, []);
};
export const SliderContext = createContext({
  handler: undefined,
  trackRef: undefined,
  thumbRef: undefined,
  rootRef: undefined,
});
export const SliderContextProvider = ({ min, max, value, step, children }) => {
  assert(max > min, "max must be greater than min");
  const [handler, setHandler] = useState(undefined);
  const thumbRef = useRef(null);
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const steps = useMemo(() => {
    return step !== undefined && step > 0
      ? calculateSteps(min, max, step)
      : undefined;
  }, [step, min, max]);
  useEffect(() => {
    if (
      trackRef.current !== null &&
      thumbRef.current !== null &&
      rootRef.current !== null
    ) {
      setHandler(
        new SlideHandler({
          value,
          min,
          max,
          rootDOM: rootRef.current,
          thumbDOM: thumbRef.current,
          trackDOM: trackRef.current,
          steps,
        })
      );
    }
  }, [value, min, max, steps]);
  const contextValue = useMemo(
    () => ({
      handler,
      thumbRef,
      trackRef,
      rootRef,
    }),
    [handler, trackRef, thumbRef, rootRef]
  );
  return (
    <SliderContext.Provider value={contextValue}>
      {children}
    </SliderContext.Provider>
  );
};
export const SliderTrack = ({ className, children }) => {
  const { trackRef } = useContext(SliderContext);
  return (
    <div ref={trackRef} className={className}>
      {children}
    </div>
  );
};
export const SliderThumb = ({ className }) => {
  const { thumbRef, handler } = useContext(SliderContext);
  const style = exists(handler)
    ? {
        position: "absolute",
        left: handler.calculateThumbLeft(),
        top: "auto",
        bottom: "auto",
      }
    : undefined;
  return <div ref={thumbRef} style={style} className={className} />;
};
export const SliderProgress = ({ className }) => {
  const { handler } = useContext(SliderContext);
  const style = exists(handler)
    ? {
        position: "absolute",
        width: handler.calculateProgressWidth(),
      }
    : undefined;
  return <div className={className} style={style} />;
};
export const SliderRoot = (props) => {
  return (
    <SliderContextProvider {...props}>
      <_SliderRoot {...props} />
    </SliderContextProvider>
  );
};

const _SliderRoot = (props) => {
  const { onChange } = props;
  const { rootRef, handler } = useContext(SliderContext);
  const onStepUpdate = useCallback(
    (direction) => {
      if (exists(handler)) {
        onChange(handler.updateValueFromStep(direction));
      }
    },
    [onChange, handler]
  );
  const defaultOnKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowDown":
          onStepUpdate(-1);
          break;

        case "ArrowRight":
        case "ArrowUp":
          onStepUpdate(1);
          break;
      }
    },
    [onStepUpdate]
  );
  const { state, handlers } = useEventHandlers({
    ref: rootRef,
    onKeyDown: defaultOnKeyDown,
    ...props,
  });
  const {
    style,
    injectedProps,
    className,
    tabIndex,
    testId,
    innerRef,
    role,
    values,
  } = useRootProps(props, state);
  const isDisabled = state === InteractionState.Disabled;
  const [isTracking, setIsTracking] = useState(false);
  const onPointerUpdate = useCallback(
    (event) => {
      if (exists(handler)) {
        onChange(handler.updateValueFromPointerEvent(event));
      }
    },
    [onChange, handler]
  );
  const onPointerDown = useCallback(
    (event) => {
      setIsTracking(true);
      onPointerUpdate(event.nativeEvent);
    },
    [onPointerUpdate]
  );
  const onPointerUp = useCallback(() => {
    setIsTracking(false);
  }, []);
  const onPointerMove = useCallback(
    (event) => {
      if (isTracking) {
        onPointerUpdate(event);
      }
    },
    [isTracking, onPointerUpdate]
  );
  useEffect(() => {
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointermove", onPointerMove);
    return () => {
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, [onPointerUp, onPointerMove]);
  return (
    <div
      tabIndex={tabIndex}
      ref={combineRef(innerRef, rootRef)}
      role={role}
      data-testid={testId}
      {...handlers}
      {...(exists(injectedProps.reactProps) ? injectedProps.reactProps : {})}
      className={className}
      style={style}
      onPointerDown={isDisabled ? null : onPointerDown}
    >
      {renderChildren(props.children, values)}
    </div>
  );
};