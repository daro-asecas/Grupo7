import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/layout/Navbar"
import { Home } from "./components/routes/Home"
import { Nacionales } from "./components/routes/Autos"
import { Importados } from "./components/routes/Autos"
import { Repuestos } from "./components/routes/Vende"
import { Service } from "./components/routes/Service"
import { PuntosDeVenta } from "./components/routes/PuntosDeVenta"
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
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/nacionales" element={<Nacionales />} />
          <Route path="/importados" element={<Importados  />} />
          <Route path="/repuestos" element={<Repuestos />} />
          <Route path="/service" element={<Service />} />
          <Route path="/puntosdeventa" element={<PuntosDeVenta />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/FormRepuestos" element={<FormRepuestos />} />
          <Route path="/Financiacion" element={<Financiacion />} />
        </Routes>
      <Footer/>
    </>
  );
}