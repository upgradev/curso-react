import React, { useContext } from "react";
import { HookCustom } from "../components/HookCustom";
import { HookUseCallBack } from "../components/HookUseCallBack";
import { SomeContext } from "../components/HookUseContext";
import { HookuseEffect } from "../components/HookuseEffect";
import { HookUseImperativeHandle } from "../components/HookUseImperativeHandle";
import { HookUseLayoutEffect } from "../components/HookUseLayoutEffect";
import { HookUseMemo } from "../components/HookUseMemo";
import { HookUseReducer } from "../components/HookUseReducer";
import { HookUseRef } from "../components/HookUseRef";
import { HookUseState } from "../components/HookUseState";

export const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookuseEffect />
      <h2> 8 - useContext </h2>
      <p>Valor do context: {contextValue} </p>
      <hr />
      <HookUseRef />
      <HookUseCallBack />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  );
};
