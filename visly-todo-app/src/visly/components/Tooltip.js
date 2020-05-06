// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import React from "react";
import { exists } from "./_internal_utils";
import { TextPrimitive } from "./_internal_primitives";
import { TooltipRoot } from "./_internal_tooltip";
import "./Tooltip.css";

const styles = [
  {
    type: "default",
    layers: {
      TTEMhM4fuL: {
        none: {
          arrowColor: "rgba(0,0,0,1)",
        },
      },
      "tooltip-text": {
        none: {
          text: "Tooltip",
        },
      },
    },
  },
];

export default function Tooltip(props) {
  return (
    <TooltipRoot
      {...props}
      key="TTEMhM4fuL"
      internal={{
        styles,
        layerId: "TTEMhM4fuL",
        scope: "CV7khtZtKf",
        variantPropTypes: [],
      }}
      internalChildren={
        <TextPrimitive
          className={
            "__visly_reset __visly_tooltip-text __visly_scope_CV7khtZtKf"
          }
          key={"tooltip-text"}
          text={exists(props.text) ? props.text : "Tooltip"}
        />
      }
    >
      {props.children}
    </TooltipRoot>
  );
}
