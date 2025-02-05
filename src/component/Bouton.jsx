
const Bouton = ({label, func}) => {

    return (
        <>
        <button onClick={() => func(label)}>{label}</button>
        </>
    )
}

export default Bouton