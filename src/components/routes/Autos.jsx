import "../../styles/nuevos.css"
import { AutosCard } from "./AutosCard";

export const autos = {}

autos.importados = [
  {marca: "ALFA ROMEO", img: "alfa"},
  {marca: "AUDI", img: "audi"},
  {marca: "BMW", img: "bmw"},
  {marca: "FERRARI", img: "ferrari"},
  {marca: "JEEP", img: "jeep"},
  {marca: "LAND ROVER", img: "land"},
  {marca: "LEXUS", img: "lexus"},
  {marca: "MERCEDES", img: "mercedes"},
  {marca: "MINI", img: "mini"},
  {marca: "PORSCHE", img: "porsche"},
  {marca: "DODGE RAM", img: "ram"},
  {marca: "VOLVO", img: "volvo"},
]

autos.nacionales = [
  {marca: "CHEVROLET", img: "chevro"},
  {marca: "CITROEN", img: "citro"},
  {marca: "FIAT", img: "fiat"},
  {marca: "FORD", img: "ford"},
  {marca: "NISSAN", img: "nissan"},
  {marca: "PEUGEOT", img: "peug"},
  {marca: "RENAULT", img: "ren"},
  {marca: "TOYOTA", img: "toyo"},
  {marca: "VOLKSWAGEN", img: "volks"},
]

export function Importados () {
  return Autos("importados")
}

export function Nacionales () {
  return Autos("nacionales")
}

function Autos (nacionalidad) {
    return (
      <>
        <div className="body cardnuevos">

        {autos[nacionalidad].map((auto) =>
          <AutosCard  
            marca={auto.marca} 
            img={`/${nacionalidad}/${auto.img}.png`}
          />
        )}

        </div>
        

      </>
    );
  }
