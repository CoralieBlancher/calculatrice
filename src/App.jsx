import './App.css'
import { CalculProvider } from "./context/CalculContext.jsx";
import Calcul from './component/Calcul'

const App = () => {


  return (
    <>
     <CalculProvider>
      <Calcul/>
      </CalculProvider>
    </>
  )
}

export default App
