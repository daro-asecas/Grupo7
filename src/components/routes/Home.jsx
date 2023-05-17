import "../../styles/home.css"

export const CardDelHome = (props) => {
  return (
    <> 
    <div className="cardHome">
        <h3>{props.titulo}</h3>
        <img className="imgHome" src={props.img} />
        <p >{props.descripcion}</p>
    </div>
    </>
  )
}


export function Home() {
    return (
      <>   
      <h1 className="titulo">Conseguí tu auto para vivir <br /> la acción sobre 4 ruedas</h1>

      <video src={"video.mp4"} width="1366"  height="768" autoplay="true" muted="true" loop="true"></video>
      
      <img className="arrow" src={"arrow.png"} />
      
      <div className="card">

          <CardDelHome 
                  titulo="VEHÍCULOS NACIONALES 0KM" 
                  descripcion="TODOS LOS VEHÍCULOS Y TODAS LAS LÍNEAS FABRICADAS EN ARGENTINA.
                  LA MAYOR VARIEDAD DE MODELOS DEL PAÍS EN UN SOLO LUGAR." 
                  img="/home/1.png"/>

          <CardDelHome 
                  titulo="VEHÍCULOS IMPORTADOS 0KM" 
                  descripcion="LAS MEJORES MARCAS Y MODELOS DEL MUNDO A SU ALCANCE.
                  UNIDADES ÚNICAS DIRECTAMENTE DE SU PAÍS DE ORÍGEN." 
                  img="/home/2.png"/>

          <CardDelHome 
                  titulo="REPUESTOS Y ACCESORIOS" 
                  descripcion="GRAN VARIEDAD DE REPUESTOS Y ACCESORIOS DE EXCELENCIA
                  PARA TODAS LAS LÍNEAS NACIONALES E IMPORTADAS." 
                  img="/home/3.png"/>

          <CardDelHome 
                  titulo="SERVICE POST-VENTA" 
                  descripcion="NUESTROS TALLERES CUENTAN CON LA MEJOR TECNOLOGÍA DE PUNTA
                  Y CUMPLIMOS CON TODAS LAS NORMATIVAS MUNDIALES VIGENTES." 
                  img="/home/4.png"/>

      </div>
      </>
    );
  }
