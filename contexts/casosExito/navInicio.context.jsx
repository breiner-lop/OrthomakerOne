import { createContext, useState, useContext } from "react";

const casosContext = createContext("");

export const useCasosCtx = () => useContext(casosContext);

export const CasosProvider = ({ children }) => {
  
  const [state, setState] = useState(false);
  return (
    //@ts-ignore
    <casosContext.Provider value={{ state,setState }}>
      {children}
    </casosContext.Provider>
  );
};