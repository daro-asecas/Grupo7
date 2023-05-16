import "../../styles/nuevos.css"

export function CardPuntosDeVenta(props) {

    return (
      <> 
      <div className="cardHome">
          <h3>{props.categoria}</h3>
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
        Nuevos

        <div className="cardnuevos">

            
            <CardPuntosDeVenta 
                        img="/ubicaciones/bsas.png"
                        direccion="1"
                        Wsp="11"
                        mail="a@b.com"
            />
            
            <CardPuntosDeVenta 
                        img="/ubicaciones/cordoba.png"
                        direccion="2"
                        Wsp="11"
                        mail="a@b.com"
            />
            
            <CardPuntosDeVenta 
                        img="/ubicaciones/mendoza.png"
                        direccion="3"
                        Wsp="11"
                        mail="a@b.com"
            />

            <CardPuntosDeVenta 
                        img="/ubicaciones/rosario.png"
                        direccion="4"
                        Wsp="11"
                        mail="a@b.com"
            />

            <CardPuntosDeVenta 
                        img="/ubicaciones/tucuman.png"
                        direccion="5"
                        Wsp="11"
                        mail="a@b.com"
            />

            <CardPuntosDeVenta 
                        img="/ubicaciones/ushuaia.png"
                        direccion="6"
                        Wsp="11"
                        mail="a@b.com"
            />
            
            
            
        </div>
        

      </>
    );
  }