// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import React from "react";
import { exists, getStyle } from "./_internal_utils";
import {
  StaticRootPrimitive,
  RootPrimitive,
  SpacerPrimitive,
  ImagePrimitive,
  TextPrimitive,
  ContainerPrimitive,
  IconPrimitive,
  ProgressFillPrimitive,
} from "./_internal_primitives";
import { Root, InputPrimitive } from "./_internal_input";
import { CheckboxRoot } from "./_internal_checkbox";
import { ButtonRoot } from "./_internal_button";
import { TooltipRoot } from "./_internal_tooltip";
import { PopoverRoot } from "./_internal_popover";
import { DialogRoot, DialogContainerPrimitive } from "./_internal_dialog";
import { RadioGroupRoot, RadioGroupButtonRoot } from "./_internal_radio_group";
import "./SegmentedControl.css";
const styles = [{ type: "default", layers: {} }];
export default function (props) {
  return (
    <RadioGroupRoot
      {...{
        ...props,
        key: "segmented-control-root",
        internal: {
          styles,
          layerId: "segmented-control-root",
          scope: "segmented-control-root",
          variantPropTypes: [],
        },
      }}
    >
      {(values) => [exists(props.children) ? props.children : null]}
    </RadioGroupRoot>
  );
}
