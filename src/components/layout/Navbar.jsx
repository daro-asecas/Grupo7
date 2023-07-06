import { useState } from "react"
import { NavButton } from "./Navbar/NavButton"
import "../../styles/header.css"

export function Navbar() {

  const buttons = [
    {key: "nuevos", name:"0 km Nacionales"},
    {key: "usados", name:"0 km Importados"},
    {key: "vende", name:"Repuestos"},
    {key: "servicios", name:"Service Post-Venta"},
    {key: "nosotros", name:"Puntos de Venta"},
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
        <img id= "logo" src={"/logo.jpeg"} />
      </a>
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