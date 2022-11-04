import { useEffect, useReducer, useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { async } from "@firebase/util";

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };

    case "INSERT_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  //memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const insertDocument = async (document) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
      payload: insertDocument,
    });
    try {
      const newDocument = { ...document, createAt: Timestamp.now() };

      const insertDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );
      checkCancelBeforeDispatch({
        type: "INSERT_DOC",
        payload: insertDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertDocument, response };
};
