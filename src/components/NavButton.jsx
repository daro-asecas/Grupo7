import { useState } from "react"

export function NavButton({ name, isCurrent, makeCurrent }) {
  return (
    <>
        <button className={`navbutton ${isCurrent?' current':''}`} onClick={()=> makeCurrent(name)}>
          {name}
        </button>
    </>
  );
}