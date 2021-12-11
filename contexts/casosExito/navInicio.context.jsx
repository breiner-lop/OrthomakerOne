import { createContext, useState, useContext } from "react";

const casosContext = createContext("");

export const useCasosCtx = () => useContext(casosContext);

export const CasosProvider = ({ children }) => {
  
  const [navForm, setNavForm] = useState(1);
  const [activeNumber, setActiveNumber] = useState(1);
  const [state, setState] = useState(false);
  //inputs protesis
  const [datosProtesis, setDatos] = useState({
    color:"",
    encaje:"",
    pilar:""
});
  

  return (
    //@ts-ignore
    <casosContext.Provider value={{ activeNumber,setActiveNumber,navForm,setNavForm,state,setState,datosProtesis,setDatos}}>
      {children}
    </casosContext.Provider>
  );
};