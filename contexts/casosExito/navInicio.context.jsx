import { createContext, useState, useContext } from "react";

const casosContext = createContext("");

export const useCasosCtx = () => useContext(casosContext);

export const CasosProvider = ({ children }) => {
  
  const [navForm, setNavForm] = useState(1);
  const [activeNumber, setActiveNumber] = useState(1);
  const [state, setState] = useState(false);
  

  return (
    //@ts-ignore
    <casosContext.Provider value={{ activeNumber,setActiveNumber,navForm,setNavForm,state,setState}}>
      {children}
    </casosContext.Provider>
  );
};