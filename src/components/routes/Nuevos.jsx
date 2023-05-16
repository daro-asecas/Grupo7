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
        <div className="cardnuevos">

            <CardDe0kms 
                        marca="CHEVROLET" 
                        img="/nacionales/chevro.png"/>

            <CardDe0kms 
                        marca="CITROEN" 
                        img="/nacionales/citro.png"/>

            <CardDe0kms 
                        marca="FIAT" 
                        img="/nacionales/fiat.png"/>

            <CardDe0kms 
                        marca="FORD" 
                        img="/nacionales/ford.png"/>

            <CardDe0kms 
                        marca="NISSAN" 
                        img="/nacionales/nissan.png"/>

            <CardDe0kms 
                        marca="PEUGEOT" 
                        img="/nacionales/peug.png"/>

            <CardDe0kms 
                        marca="RENAULT" 
                        img="/nacionales/ren.png"/>

            <CardDe0kms 
                        marca="TOYOTA" 
                        img="/nacionales/toyo.png"/>

            <CardDe0kms 
                        marca="VOLKSWAGEN" 
                        img="/nacionales/volks.png"/>

        </div>
        

      </>
    );
  }
