// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { createContext, useContext, useRef } from "react";
import {
  exists,
  useRootProps,
  useEventHandlers,
  InteractionState,
  combineRef,
} from "./_internal_utils";
const Context = createContext(null);
export function Root(props) {
  const ref = useRef();
  const { state, handlers } = useEventHandlers({
    ref,
    ...props,
  });

  const onChange = (e) => {
    if (exists(props.onChange)) {
      props.onChange(e.currentTarget.value);
    }
  };

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
  return (
    <div
      tabIndex={tabIndex}
      ref={combineRef(innerRef, ref)}
      role={role}
      data-testid={testId}
      {...handlers}
      {...(exists(injectedProps.reactProps) ? injectedProps.reactProps : {})}
      className={className}
      style={style}
    >
      <Context.Provider
        value={{
          inputRef: props.inputRef,
          onFocus: handlers.onFocus,
          onBlur: handlers.onBlur,
          onChange,
          injectedProps,
          value: props.value,
          disabled: state === InteractionState.Disabled,
        }}
      >
        {props.children(values)}
      </Context.Provider>
    </div>
  );
}
export function InputPrimitive(props) {
  const {
    onFocus,
    onBlur,
    onChange,
    inputRef,
    injectedProps,
    value,
    disabled,
  } = useContext(Context);
  const placeholder =
    exists(injectedProps) && exists(injectedProps.placeholder)
      ? injectedProps.placeholder
      : props.placeholder;
  return (
    <input
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      ref={inputRef}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={
        exists(injectedProps)
          ? injectedProps.deepDisablePointerEvents
          : undefined
      }
      className={props.className}
      style={{
        borderWidth: "none",
        borderStyle: "none",
        borderColor: "none",
        borderImage: "none",
        outline: "none",
        background: "none",
        ...(exists(injectedProps) && injectedProps.deepDisablePointerEvents
          ? {
              pointerEvents: "none",
            }
          : {}),
        ...(disabled
          ? {
              cursor: "not-allowed",
            }
          : {}),
      }}
    />
  );
}