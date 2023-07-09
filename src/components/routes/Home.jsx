import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CardDelHome = (props) => {
  return (
    <> 
   
    <div className="cardHome">
        <h3>{props.titulo}</h3>
        <img className="imgHome" src={props.img} />
        <h5>{props.descripcion}</h5>
        <Link className="link" to={props.ruta}>{props.intro}</Link>
    </div> 

    </>
  )
}


export function Home() {
    return (
      <>   
      
      <h1 className="titulo">Conseguí tu auto para vivir <br /> la acción sobre 4 ruedas</h1>

      <video src={"video.mp4"} min-width="100%" min-height="100%" autoplay="true" muted="true" loop="true"></video>
      
      <img className="arrow" src={"arrow.png"} />
      
      <div className="cards">

        <CardDelHome 
                titulo="NACIONALES 0KM" 
                descripcion="TODOS LOS VEHÍCULOS DE TODAS LAS LÍNEAS FABRICADAS EN ARGENTINA,
                LA MAYOR VARIEDAD DE MODELOS DEL PAÍS EN UN SOLO LUGAR."
                img="/home/1.png"
                ruta="/nacionales"
                intro="Consigue tu 0km"
        />

        <CardDelHome 
                titulo="IMPORTADOS 0KM" 
                descripcion="LAS MEJORES MARCAS Y MODELOS DEL MUNDO A TU ALCANCE,
                UNIDADES ÚNICAS DIRECTAMENTE DE SU PAÍS DE ORÍGEN."
                img="/home/2.png"
                ruta="/importados"
                intro="Tu importado aquí"
        />

        <CardDelHome 
                titulo="REPUESTOS Y ACCESORIOS" 
                descripcion="GRAN VARIEDAD DE REPUESTOS Y ACCESORIOS DE EXCELENCIA
                PARA TODAS LAS LÍNEAS NACIONALES E IMPORTADAS"
                img="/home/3.png"
                ruta="/repuestos"
                intro="Repuestos y accesorios a tu alcance"
        />
                
        <CardDelHome 
                titulo="SERVICE POST-VENTA" 
                descripcion="NUESTROS TALLERES CUENTAN CON LA MEJOR TECNOLOGÍA DE PUNTA INSTALADA,
                CUMPLIENDO CON TODAS LAS NORMATIVAS MUNDIALES VIGENTES."
                img="/home/4.png"
                ruta="/service"
                intro="Consultar"
        />

        <CardDelHome 
                titulo="PUNTOS DE VENTA" 
                descripcion="ESTAMOS EN VARIOS PUNTOS DEL PAÍS" 
                img="/home/mapa.jpg"
                ruta="/puntosdeventa"
                intro="Ver"
        />

        <CardDelHome 
                titulo="CONTACTANOS" 
                descripcion="ENVIANOS TU MENSAJE" 
                img="/home/contacto.jpg"
                ruta="/contacto"
                intro="Contacto"
        />

      </div>
      </>
    );
  }
