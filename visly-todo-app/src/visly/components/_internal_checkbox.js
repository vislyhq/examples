// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useCallback, useRef } from "react";
import {
  exists,
  useRootProps,
  useEventHandlers,
  combineRef,
  getStyleFunc,
} from "./_internal_utils";
export function CheckboxRoot(props) {
  const ref = useRef();
  const { state, handlers } = useEventHandlers({
    ref,
    ...props,
  });
  const {
    style,
    injectedProps,
    className,
    variants,
    tabIndex,
    testId,
    innerRef,
    role,
    values,
  } = useRootProps(props, state);
  const checked = exists(variants.find((v) => v.propName === "checked"));
  const noSelectStyles = exists(props.onChange)
    ? {
        cursor: "pointer",
        userSelect: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
      }
    : {};
  handlers.onClick = useCallback(() => {
    if (exists(props.onChange)) {
      props.onChange(!checked);
    }
  }, [props, checked]);
  return (
    <div
      tabIndex={tabIndex}
      ref={combineRef(innerRef, ref)}
      role={role}
      data-testid={testId}
      {...handlers}
      {...(exists(injectedProps.reactProps) ? injectedProps.reactProps : {})}
      className={className}
      style={{ ...noSelectStyles, ...style }}
    >
      {props.children(getStyleFunc(values))}
    </div>
  );
}
