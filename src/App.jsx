import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/layout/Navbar"
import { Home } from "./components/routes/Home"
import { Nuevos } from "./components/routes/Nuevos"
import { Importados } from "./components/routes/Usados"
import { Repuestos } from "./components/routes/Vende"
import { Servicios } from "./components/routes/Servicios"
import { Nosotros } from "./components/routes/Nosotros"
import { Contacto } from "./components/routes/Contacto"
import { FormRepuestos } from "./components/routes/FormRepuestos"
import { Financiacion } from "./components/routes/Financiacion"
import { Footer } from "./components/layout/Footer"
import './styles/layout.css';


export default function App() {
  return (
    <>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevos" element={<Nuevos />} />
        <Route path="/Usados" element={<Importados  />} />
        <Route path="/vende" element={<Repuestos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/FormRepuestos" element={<FormRepuestos />} />
        <Route path="/Financiacion" element={<Financiacion />} />
      </Routes>
      <Footer/>
    </>
  );
}