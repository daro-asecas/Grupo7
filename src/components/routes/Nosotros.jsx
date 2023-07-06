import "../../styles/nuevos.css"

export function CardPuntosDeVenta(props) {

    return (
      <> 
      <div className="cardHome">
          <h4>{props.ubicacion}</h4>
          <img className="imgHome" src={props.img} />
            <p>
                {props.direccion} <br />
                {props.Wsp} <br />
                {props.mail}
            </p>
      </div>
      </>
    )
  }
  



export function Nosotros() {
    return (
      <>

        <div className="cardnuevos">

            
            <CardPuntosDeVenta 
                        ubicacion="CIUDAD AUTÓNOMA DE BUENOSA AIRES"
                        img="/ubicaciones/bsas.png"
                        direccion="Av. Díaz Vélez, C1414 CABA"
                        Wsp="(011) 22334455"
                        mail="sucursalcaba@carseven.com"
            />
            
            <CardPuntosDeVenta 
                        ubicacion="CIUDAD DE CÓRDOBA"
                        img="/ubicaciones/cordoba.png"
                        direccion="Deodoro Roca, Córdoba"
                        Wsp="(351) 22334455"
                        mail="sucursalcordoba@carseven.com"
            />
            
            <CardPuntosDeVenta 
                        ubicacion="CIUDAD DE MENDOZA"
                        img="/ubicaciones/mendoza.png"
                        direccion="Av Emilio Civit 701, M5500 Mendoza"
                        Wsp="(261) 22334455"
                        mail="sucursalendoza@carseven.com"
            />

            <CardPuntosDeVenta 
                        ubicacion="ROSARIO"
                        img="/ubicaciones/rosario.png"
                        direccion="Láinez 1-48, S2000"
                        Wsp="(341) 22334455"
                        mail="sucursalrosario@carseven.com"
            />

            <CardPuntosDeVenta 
                        ubicacion="SAN MIGUEL DE TUCUMÁN"
                        img="/ubicaciones/tucuman.png"
                        direccion="Av. Soldati SN"
                        Wsp="(381) 22334455"
                        mail="sucursaltucuman@carseven.com"
            />

            <CardPuntosDeVenta 
                        ubicacion="USHUAIA"
                        img="/ubicaciones/ushuaia.png"
                        direccion="5QVM+5P Ushuaia"
                        Wsp="(290) 22334455"
                        mail="sucursalushuaia@carseven.com"
            />
            

        </div>
        

      </>
    );
  }
