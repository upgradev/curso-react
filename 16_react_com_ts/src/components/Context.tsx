import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {};

function Context() {
  const details = useContext(AppContext);

  return (
    <>
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h4>Framework: {details.framework}</h4>
          <p>Qtde: {details.projects}</p>
        </div>
      )}
    </>
  );
}

export default Context;
