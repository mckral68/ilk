"use client";
import { createContext, useContext, useState } from "react";
const ModelContext = createContext();
export const ModelProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const values = { show, setShow };
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
