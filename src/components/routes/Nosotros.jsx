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
                        Wsp="011"
                        mail="buenosAires@b.com"
            />
            
            <CardPuntosDeVenta 
                        img="/ubicaciones/cordoba.png"
                        direccion="2"
                        Wsp="351"
                        mail="cordoba@b.com"
            />
            
            <CardPuntosDeVenta 
                        img="/ubicaciones/mendoza.png"
                        direccion="3"
                        Wsp="261"
                        mail="mendoza@b.com"
            />

            <CardPuntosDeVenta 
                        img="/ubicaciones/rosario.png"
                        direccion="4"
                        Wsp="342"
                        mail="rosario@b.com"
            />

            <CardPuntosDeVenta 
                        img="/ubicaciones/tucuman.png"
                        direccion="5"
                        Wsp="381"
                        mail="tucuman@b.com"
            />

            <CardPuntosDeVenta 
                        img="/ubicaciones/ushuaia.png"
                        direccion="6"
                        Wsp="2901"
                        mail="ushuaia@b.com"
            />
            
            
            
        </div>
        

      </>
    );
  }
