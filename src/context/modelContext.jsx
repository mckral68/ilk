"use client";
import { createContext, useContext, useEffect, useState } from "react";
const ModelContext = createContext();
export const ModelProvider = ({ children }) => {
  const [show, setShow] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const values = { show, setShow, isDone };
  useEffect(() => {
    localStorage.getItem("isAnswered") ? setShow(false) : setShow(true);
    setIsDone(true);
  }, [setShow]);
  return (
    <ModelContext.Provider value={values}>{children}</ModelContext.Provider>
  );
};
export const useModel = () => {
  const context = useContext(ModelContext);
  if (context === undefined) {
    throw new Error("Hata");
  }
  return context;
};
