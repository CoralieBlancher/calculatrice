import { useReducer } from "react";

const initialState = {
    num1: "",
    num2: "",
    op:"",
    res: "",
    error: "",
}

const checkValues = (state) => {
    if (state.num1 === "") {return false}
    if (state.num2 === "") {return false}
    return true
}

const reducer = (state, action) => {
    switch(action.type) {
  
        case "set_num":
            if (state.op === ""){
                return {
                    ...state, 
                    num1: state.num1 + action.payload
                };
            }else {
                return {
                    ...state,
                    num2: state.num2 + action.payload
                }
            }

        case "set_op":
            if (state.num1 === "") {
                return { ...state, error: "Merci d'entrez un chiffre avant l'opérateur" };
              }
              return { ...state, op: action.payload, error: "" }; 


        case "calculate":
            if (!checkValues(state)){
                return {
                    ...state,
                    error: "Merci de rentrer la première valeur, l'opérateur et la deuxième valeur avant de cliquer sur égal."
                }
            }

            const result = eval(`${state.num1}${state.op}${state.num2}`);
            return {
                ...state,
                res: result,
                num1: result.toString(),
                num2: "",
                op: "",
                error: "",
            }
            
        case "reset":
            return initialState;
            
        default:
            return state;
    }
}

const useCalculReducer = () => useReducer(reducer, initialState)

export default useCalculReducer