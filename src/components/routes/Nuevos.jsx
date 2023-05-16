import "../../styles/nuevos.css"

export const CardDe0kms = (props) => {
    return (
      <> 
      <div className="cardHome">
          <h3>{props.marca}</h3>
          <img className="imgHome" src={props.img} />
          <br />
              <button>Consultanos</button>
            <br />
      </div>
      </>
    )
  }
  



export function Nuevos() {
    return (
      <>
        Nuevos

        <div className="cardnuevos">

            <CardDe0kms 
                        marca="CHEVROLET" 
                        img="/chevro.png"/>

            <CardDe0kms 
                        marca="CITROEN" 
                        img="/citro.png"/>

            <CardDe0kms 
                        marca="FIAT" 
                        img="/fiat.png"/>

            <CardDe0kms 
                        marca="FORD" 
                        img="/ford.png"/>

            <CardDe0kms 
                        marca="NISSAN" 
                        img="/nissan.png"/>

            <CardDe0kms 
                        marca="PEUGEOT" 
                        img="/peug.png"/>

            <CardDe0kms 
                        marca="RENAULT" 
                        img="/ren.png"/>

            <CardDe0kms 
                        marca="TOYOTA" 
                        img="/toyo.png"/>

            <CardDe0kms 
                        marca="VOLKSWAGEN" 
                        img="/volks.png"/>

        </div>
        

      </>
    );
  }