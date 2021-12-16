import { createContext, useState, useContext } from "react";

const casosContext = createContext("");
export const useCasosCtx = () => useContext(casosContext);
export const CasosProvider = ({ children }) => {
  
  const [navForm, setNavForm] = useState(1);
  const [activeNumber, setActiveNumber] = useState(1);
  const [state, setState] = useState(false);
  // POPUP ACCOUNT
  const [popup,setPopup] = useState({
    state:false,
    auth:false
  });
  //inputs protesis
  const [datosProtesis,setDatos] = useState({
    color:"rojo",
    lace:3.92,
    pillar:10.50
});
  

  return (
    //@ts-ignore
    <casosContext.Provider value={{activeNumber,setActiveNumber,navForm,setNavForm,state,setState,datosProtesis,setDatos,setPopup,popup}}>
      {children}
    </casosContext.Provider>
  );
};