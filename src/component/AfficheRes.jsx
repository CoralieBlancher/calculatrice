import useCalculContext from "../context/CalculContext"

const AfficheRes = () => {
    const {state} = useCalculContext()

    return (
        <>
        <span>
            {state.res === ""? state.num1:state.res}
        </span>
        </>
    )
}

export default AfficheRes