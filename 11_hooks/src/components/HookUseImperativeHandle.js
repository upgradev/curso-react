import React, { useRef } from "react";
import { SomeComponent } from "./SomeComponent";

export const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>14 - useImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};
