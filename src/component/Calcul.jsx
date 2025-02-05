import AfficheRes from "./AfficheRes.jsx"
import Boutons from "./Boutons.jsx"
import useCalculContext from "../context/CalculContext.jsx";

const Calcul = () => {

    const {state} = useCalculContext();
 
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}><AfficheRes/></th>
                    </tr>
                </thead>
                <tbody>
                    <Boutons/>
                </tbody>
            </table>
            {
                state.error && <p style={{color: "red"}}>{state.error}</p>
            }
        </>
    )
}

export default Calcul