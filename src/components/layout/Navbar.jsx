import { useState } from "react"
import { NavButton } from "./Navbar/NavButton"
import "../../styles/header.css"

export function Navbar() {

  const buttons = [
    {key: "nosotros", name:"Nosotros"},
    {key: "nacionales", name:"0 km Nacionales"},
    {key: "importados", name:"0 km Importados"},
    {key: "repuestos", name:"Repuestos"},
    {key: "service", name:"Service Post-Venta"},
    {key: "puntosdeventa", name:"Puntos de Venta"},
    {key: "contacto", name:"Contactanos"},
  ]

  const [currentButton, setCurrentButton] = useState("home")
  
  function makeCurrent(name) {
    setCurrentButton(() => {
      return name
    })
  }
  
  return (
    <header>
      <a href="/">
        <img id="logo" src={"/logoChico.png"} />
      </a>
      <h5>CARS<br/>SEVEN</h5>
      <div id= "navbar">
        {buttons.map(button=>{
          return (
            <NavButton
              key={button.key}
              url={button.key}
              name={button.name}
              isCurrent={currentButton===button}
              makeCurrent={makeCurrent}
            />
          )
        })}
      </div>
    </header>
  )
}