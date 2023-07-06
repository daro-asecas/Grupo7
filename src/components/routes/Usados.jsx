import "../../styles/nuevos.css"
import { Link } from "react-router-dom";  

export function CardImportados(props) {
    return (
      <> 
      <div className="cardHome">
          <h3>{props.marca}</h3>
          <img className="imgHome" src={props.img} />
          <br />
          <Link className="link" to="/Financiacion">Financiacion</Link>
          <br />
      </div>
      </>
    )
  }
  



export function Importados () {
    return (
      <>
        <div className="cardnuevos">

            <CardImportados 
                        marca="ALFA ROMEO" 
                        img="/importados/alfa.png"/>

            <CardImportados  
                        marca="AUDI" 
                        img="/importados/audi.png"/>

            <CardImportados  
                        marca="BMW" 
                        img="/importados/bmw.png"/>

            <CardImportados  
                        marca="FERRARI" 
                        img="/importados/ferrari.png"/>

            <CardImportados  
                        marca="JEEP" 
                        img="/importados/jeep.png"/>

            <CardImportados  
                        marca="LAND ROVER" 
                        img="/importados/land.png"/>

            <CardImportados  
                        marca="LEXUS" 
                        img="/importados/lexus.png"/>

            <CardImportados  
                        marca="MERCEDES" 
                        img="/importados/mercedes.png"/>

            <CardImportados  
                        marca="MINI" 
                        img="/importados/mini.png"/>

            <CardImportados  
                        marca="PORSCHE" 
                        img="/importados/porsche.png"/>

            <CardImportados  
                        marca="DODGE RAM" 
                        img="/importados/ram.png"/>
            <CardImportados  

                        marca="VOLVO" 
                        img="/importados/volvo.png"/>

        </div>
        

      </>
    );
  }
