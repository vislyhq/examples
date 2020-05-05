// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import React from "react";
import { exists } from "./_internal_utils";
import {
  RootPrimitive,
  SpacerPrimitive,
  TextPrimitive,
  ContainerPrimitive,
} from "./_internal_primitives";
import "./Page.css";

const styles = [
  {
    type: "default",
    layers: {
      "89iXNc216g": {
        none: {
          text: "Visly Todo List",
        },
      },
    },
  },
];

export default function Page(props) {
  return (
    <RootPrimitive
      {...props}
      key="TtVRaoP5z1"
      internal={{
        styles,
        layerId: "TtVRaoP5z1",
        scope: "QiWhaKESAq",
        variantPropTypes: [],
      }}
      addSpacing={false}
    >
      {(getStyle) => [
        <ContainerPrimitive
          className={
            "__visly_reset __visly_JP9ihgMFtT __visly_scope_QiWhaKESAq"
          }
          key={"JP9ihgMFtT"}
          addSpacing={false}
        >
          {[
            <ContainerPrimitive
              className={
                "__visly_reset __visly_SpUQvirEGw __visly_scope_QiWhaKESAq"
              }
              key={"SpUQvirEGw"}
              addSpacing={false}
            >
              {[
                <ContainerPrimitive
                  className={
                    "__visly_reset __visly_VNsgBTjU84 __visly_scope_QiWhaKESAq"
                  }
                  key={"VNsgBTjU84"}
                  addSpacing={false}
                >
                  {[]}
                </ContainerPrimitive>,
              ]}
            </ContainerPrimitive>,
            <TextPrimitive
              className={
                "__visly_reset __visly_89iXNc216g __visly_scope_QiWhaKESAq"
              }
              key={"89iXNc216g"}
              text={exists(props.title) ? props.title : "Visly Todo List"}
            />,
            <SpacerPrimitive
              className={
                "__visly_reset __visly_8SAAvAuvbr __visly_scope_QiWhaKESAq"
              }
              key={"8SAAvAuvbr"}
            />,
            <ContainerPrimitive
              key={"T4bdLvJ8PZ"}
              className={
                "__visly_reset __visly_T4bdLvJ8PZ __visly_scope_QiWhaKESAq"
              }
              addSpacing={false}
            >
              {exists(props.children) ? props.children : null}
            </ContainerPrimitive>,
          ]}
        </ContainerPrimitive>,
      ]}
    </RootPrimitive>
  );
}
