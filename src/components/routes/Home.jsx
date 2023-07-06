import "../../styles/home.css"
import { Link } from "react-router-dom";  

export const CardDelHome = (props) => {
  return (
    <> 
   
    <div className="cardHome">
        <h3>{props.titulo}</h3>
        <img className="imgHome" src={props.img} />
        <p >{props.descripcion}</p>
        <Link className="link" to={props.ruta}>{props.intro}</Link>
    </div> 

    </>
  )
}


export function Home() {
    return (
      <>   
      <alerta />
      <h1 className="titulo">Conseguí tu auto para vivir <br /> la acción sobre 4 ruedas</h1>

      <video src={"video.mp4"} width="1366"  height="768" autoplay="true" muted="true" loop="true"></video>
      
      <img className="arrow" src={"arrow.png"} />
      
      <div className="cards">

          <CardDelHome 
                  titulo="NACIONALES 0KM" 
                  descripcion="LA MAYOR SELECCIÓN DE MODELOS DEL PAÍS EN UN SOLO LUGAR" 
                  img="/home/nac.jpg"
                  ruta="/nuevos"
                  intro="Consigue tu 0km"
                  />


          <CardDelHome 
                  titulo="IMPORTADOS 0KM" 
                  descripcion="LAS MEJORES MARCAS DEL MUNDO A SU ALCANCE" 
                  img="/home/1.png"
                  ruta="/usados"
                  intro="Importados"
                  />

          <CardDelHome 
                  titulo="REPUESTOS Y ACCESORIOS" 
                  descripcion="REPUESTOS Y ACCESORIOS
                  PARA TODAS LAS LÍNEAS, NACIONALES E IMPORTADAS" 
                  img="/home/accesorios.png"
                  ruta="/vende"
                  intro="Conseguir accesorios"
                  />
                  

          <CardDelHome 
                  titulo="SERVICE POST-VENTA" 
                  descripcion="CUMPLIMOS CON TODAS LAS NORMATIVAS MUNDIALES VIGENTES
                  Y CONTAMOS CON LA ÚLTIMA TECNOLOGÍA" 
                  img="/home/4.png"
                  ruta="/servicios"
                  intro="Consultar"
                  />

          <CardDelHome 
                  titulo="PUNTOS DE VENTA" 
                  descripcion="VARIOS PUNTOS DE VENTA EN EL PAÍS" 
                  img="/home/mapa.jpg"
                  ruta="/nosotros"
                  intro="Ver"
                  />

          <CardDelHome 
                  titulo="CONTACTANOS" 
                  descripcion="AQUI PODRAS CONSULTAR SOBRE FINANCIACIONES" 
                  img="/home/contacto.jpg"
                  ruta="/contacto"
                  intro="Contacto"
                  />
                  
      </div>
      </>
    );
  }
