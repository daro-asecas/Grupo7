import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Home } from "./components/routes/Home"
import { Nuevos } from "./components/routes/Nuevos"
import { Usados } from "./components/routes/Usados"
import { Vende } from "./components/routes/Vende"
import { Servicios } from "./components/routes/Servicios"
import { Nosotros } from "./components/routes/Nosotros"
import { Contacto } from "./components/routes/Contacto"
import './styles/layout.css';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevos" element={<Nuevos />} />
        <Route path="/usados" element={<Usados />} />
        <Route path="/vende" element={<Vende />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </>
  );
}