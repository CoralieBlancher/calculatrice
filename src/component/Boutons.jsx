
import useCalculContext from "../context/CalculContext.jsx"
import Bouton from "./Bouton.jsx"


const Boutons = () => {
    const {state, dispatch} = useCalculContext()
   

    const clickNum = (num) => {
        dispatch({
            type: "set_num",
            payload: num
        })
    }

    const clickOp = (op) => {
        if (state.num2 === ""){
            dispatch({
                type: "set_op",
                payload: op
            })
        }else{
            dispatch({
                type: "calculate"
            })
            dispatch({
                type: "set_op",
                payload: op
            })
        }
        
    }

    const clickEg = () => {
        dispatch({
            type: "calculate"
        })
    }

    const clickRes = () => {
        dispatch({
            type: "reset"
        })
    }


    return (
        <>
            <tr>
                <td><Bouton label={"7"} func={clickNum}/></td>
                <td><Bouton label={"8"} func={clickNum}/></td>
                <td><Bouton label={"9"} func={clickNum}/></td>
            </tr>
            <tr>
                <td><Bouton label={"4"} func={clickNum}/></td>
                <td><Bouton label={"5"} func={clickNum}/></td>
                <td><Bouton label={"6"} func={clickNum}/></td>
            </tr>
            <tr>
                <td><Bouton label={"1"} func={clickNum}/></td>
                <td><Bouton label={"2"} func={clickNum}/></td>
                <td><Bouton label={"3"} func={clickNum}/></td>
            </tr>
            <tr>
                <td colSpan={3}><Bouton label={"0"} func={clickNum}/></td>
            </tr>
            <tr>
                <td><Bouton label={"+"} func={clickOp}/></td>
                <td><Bouton label={"-"} func={clickOp}/></td>
                <td><Bouton label={"*"} func={clickOp}/></td>
            </tr>
            <tr>
                <td colSpan={3}><Bouton label={"="} func={clickEg}/></td>
            </tr>
            <tr>
                <td colSpan={3}><Bouton label={"Reset"} func={clickRes}/></td>
            </tr>
        </>
    )
}

export default Boutons