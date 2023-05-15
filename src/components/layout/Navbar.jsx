import { useState } from "react"
import { NavButton } from "./Navbar/NavButton"
import "../../styles/header.css"

export function Navbar() {

  const buttons = [
    {key: "nuevos", name:"0 km"},
    {key: "usados", name:"usados"},
    {key: "vende", name:"vende tu auto"},
    {key: "servicios", name:"servicios"},
    {key: "nosotros", name:"nosotros"},
    {key: "contacto", name:"contacto"},
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
        <img id= "logo" src={"/logo.png"} />
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