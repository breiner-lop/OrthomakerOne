import { createContext, useState, useContext } from "react";

const casosContext = createContext("");
export const useCasosCtx = () => useContext(casosContext);
export const CasosProvider = ({ children }) => {
  
  const [navForm, setNavForm] = useState(9);
  const [activeNumber, setActiveNumber] = useState(1);
  const [state, setState] = useState(false);
  //rol users
  const [rolUser, setRolUser] = useState(3);
  //  handler cases
  const [caso, setCaso] = useState(1);
  // POPUP ACCOUNT
  const [popup,setPopup] = useState({
    state:false,
    auth:false
  });
  // count orders total
  const [countOrders,setCountOrders] = useState(0);
  // handler filter orders by orderId or username
  const [filterValue,setFilterValue] = useState("");
  //inputs protesis
  const [datosProtesis,setDatos] = useState({
    color:"rojo"
});
  

  return (
    //@ts-ignore
    <casosContext.Provider value={{rolUser,setRolUser,activeNumber,caso,setCaso,setActiveNumber,navForm,setNavForm,state,setState,datosProtesis,setDatos,setPopup,popup,setCountOrders,countOrders,setFilterValue,filterValue}}>
      {children}
    </casosContext.Provider>
  );
};