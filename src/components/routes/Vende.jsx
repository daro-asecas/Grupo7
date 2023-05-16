import "../../styles/nuevos.css"

export function CardVende(props) {

    return (
      <> 
      <div className="cardHome">
          <h3>{props.categoria}</h3>
          <img className="imgHome" src={props.img} />
          <br />
              <button>Consultanos</button>
            <br />
      </div>
      </>
    )
  }
  



export function Repuestos() {
    return (
      <>
        Nuevos

        <div className="cardnuevos">

            <CardVende 
                        categoria="ACCESOSIOS" 
                        img="/repuestos/accesorios.png"/>

            <CardVende 
                        categoria="DIRECCION" 
                        img="/repuestos/direccion.png"/>

            <CardVende 
                        categoria="ELECTRICIDAD" 
                        img="/repuestos/elect.png"/>

            <CardVende 
                        categoria="FRENOS" 
                        img="/repuestos/elect.png"/>

            <CardVende 
                        categoria="INYECCIÓN ELECTRONICA" 
                        img="/repuestos/inyecc.png"/>

            <CardVende 
                        categoria="MOTORIZACIÓN" 
                        img="/repuestos/moto.png"/>

            <CardVende 
                        categoria="NEUMÁTICOS" 
                        img="/repuestos/neuma.png"/>

            <CardVende 
                        categoria="SUSPENSIÓN" 
                        img="/repuestos/suspen.png"/>

            <CardVende 
                        categoria="TRANSMISIÓN" 
                        img="/repuestos/transmi.png"/>

        </div>
        

      </>
    );
  }