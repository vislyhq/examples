// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import "./List.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { ListboxPrimitive } from "./_internal_listbox";

const styles = [
  {
    type: "default",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
];

const variantPropTypes = [];

export const ListContext = createContext(null);

function List(_props) {
  const defaults = useContext(ListContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <ListboxPrimitive
      {...props}
      key="listbox-root"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "listbox-root",
        scope: "8LtuSFsh7g",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => props.children}
    </ListboxPrimitive>
  );
}

List.__variants = [];

export default List;
