import { useDebugValue, useEffect, useRef } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("---- custoim hook e usedebugvalue");
  useDebugValue("numero anterior é: " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
