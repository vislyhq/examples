// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import "./List.Item.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { TextPrimitive } from "./_internal_primitives";
import { ListboxItemPrimitive } from "./_internal_listbox";

const styles = [
  {
    type: "default",
    layers: {
      "8R6BF5uSH2": {
        none: {
          text: "List item",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "selected",
  },
];

export const ItemContext = createContext(null);

function Item(_props) {
  const defaults = useContext(ItemContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <ListboxItemPrimitive
      {...props}
      key="listbox-item-root"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "listbox-item-root",
        scope: "QphN7vHLYz",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <TextPrimitive
          className={"__visly_reset __visly_scope_QphN7vHLYz_8R6BF5uSH2"}
          key={"8R6BF5uSH2"}
          text={
            exists(props.label) ? props.label : getStyle("8R6BF5uSH2", "text")
          }
        />
      )}
    </ListboxItemPrimitive>
  );
}

Item.__variants = [
  {
    name: "selected",
    type: "variant",
  },
];

export default Item;