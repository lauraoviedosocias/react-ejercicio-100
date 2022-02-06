import "./App.css";
import { useState } from "react";

const App = () => {

  const [color, setColor] = useState("rojo")
  const [textoBoton, setTextoBoton] = useState("Poner el fondo azul")

  const handleClick = () => {

    color === "rojo" ? setColor("azul") : setColor("rojo")
    textoBoton === "Poner el fondo azul" ? setTextoBoton("Poner el fondo rojo") : setTextoBoton ("Poner el fondo azul")
  }

  return (

    <div className={color}>

      <button onClick={handleClick}>{textoBoton}</button>

    </div>
  )
}

export default App;