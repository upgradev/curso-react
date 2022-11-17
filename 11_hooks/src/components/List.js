import React, { useEffect, useState } from "react";

export const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("buscando items... ");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      {myItems && myItems.map((item) => (
        <p key={item}> {item} </p>
      ))}
    </div>
  );
};
