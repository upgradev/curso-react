import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;

      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
        setLoading(false)
      } catch (error) {
        setError(error.message)
        console.log(error);
        setLoading(false)
      }
    }
    loadDocument();
  }, [docCollection, cancelled, id]);

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return { document, loading, error };
};
