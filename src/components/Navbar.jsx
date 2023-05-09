import { useState } from "react"
import { NavButton } from "./NavButton"
import "../styles/header.css"

export function Navbar() {

  const buttons = ["0 km", "usados", "vende tu auto", "servicios", "nosotros", "contacto"]

  const [currentButton, setCurrentButton] = useState("home")
  
  function makeCurrent(name) {
    setCurrentButton(() => {
      return name
    })
  }

  
  return (
    <header>
      <img id= "logo" src={"/logo.png"} />
      <div id= "navbar">
        {buttons.map(button=>{
          return (
            <NavButton key={button} name={button} isCurrent={currentButton===button} makeCurrent={makeCurrent}/>
          )
        })}
      </div>
    </header>
  )
}