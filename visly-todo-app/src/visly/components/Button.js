// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import "./Button.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { TextPrimitive } from "./_internal_primitives";
import { ButtonRoot } from "./_internal_button";

const styles = [
  {
    type: "default",
    layers: {
      YMF63gWc8A: {
        none: {
          text: "Button",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
];

const variantPropTypes = [];

export const ButtonContext = createContext(null);

function Button(_props) {
  const defaults = useContext(ButtonContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <ButtonRoot
      {...props}
      key="root"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "root",
        scope: "Uq5q7Rg3yu",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <TextPrimitive
          className={"__visly_reset __visly_scope_Uq5q7Rg3yu_YMF63gWc8A"}
          key={"YMF63gWc8A"}
          text={
            exists(props.text) ? props.text : getStyle("YMF63gWc8A", "text")
          }
        />
      )}
    </ButtonRoot>
  );
}

Button.__variants = [];

export default Button;
