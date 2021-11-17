import { createContext, useState, useContext } from "react";

const casosContext = createContext("");

export const useCasosCtx = () => useContext(casosContext);

export const CasosProvider = ({ children }) => {
  
  const [state, setState] = useState(false);
  const [caso, setCaso] = useState(1);
  return (
    //@ts-ignore
    <casosContext.Provider value={{ state,setState,setCaso,caso}}>
      {children}
    </casosContext.Provider>
  );
};