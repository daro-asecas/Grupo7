import "../../styles/nuevos.css"
import { Link } from "react-router-dom";  

export function AutosCard (props) {
    return (
      <div className="cardHome">
          <h3>{props.marca}</h3>
          <img className="imgHome" src={props.img} />
          <br />
          <Link className="link" to="/Financiacion">Financiacion</Link>
          <br />
      </div>
    )
  }