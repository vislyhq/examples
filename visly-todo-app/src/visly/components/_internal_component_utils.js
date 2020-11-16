// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React from "react";
import { exists } from "./_internal_utils";

const isLastIndex = (index, collection) => {
  return index === collection.length - 1;
};

export const injectBetweenEach = (array, inject) =>
  array.flatMap((item, index) =>
    !isLastIndex(index, array) ? [item, inject(index)] : [item]
  );

function isFragment(node) {
  return exists(node) && node.type === React.Fragment;
}

export const injectSpacing = (addSpacing, children) => {
  const _children = isFragment(children)
    ? children.props.children
    : Array.isArray(children)
    ? children
    : null;

  return exists(_children) && addSpacing
    ? injectBetweenEach(_children.flat(), (index) => (
        <div className="__visly_spacing" key={`__visly_spacing-${index}`} />
      ))
    : children;
};
