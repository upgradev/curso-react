import React, { forwardRef, useImperativeHandle, useRef } from "react";

export const SomeComponent = forwardRef((prop, ref) => {
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <h2>SomeComponent</h2>
      <p>Insira no maximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
});
