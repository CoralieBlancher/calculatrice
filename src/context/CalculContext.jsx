import {createContext, useContext} from "react";
import useCalculReducer from "../reducer/calculReducer.jsx";

// Creation du context
const CalculContext = createContext()


// Creation du provider grace au context
export const CalculProvider = ({children}) => {
 
 const [state, dispatch] = useCalculReducer();
 
 
 return <CalculContext.Provider value={{state, dispatch}}>
  {children}
 </CalculContext.Provider>
}

//Fonction utile permettant de consommer le context
const useCalculContext = () => useContext(CalculContext)

export default useCalculContext