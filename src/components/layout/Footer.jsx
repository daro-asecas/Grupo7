import "../../styles/footer.css"

export function Footer() {
    return (

      <footer className="footer">
       
          <div className="contenedor">
            <img className="logo" src={"/logo.jpeg"} />

            <div>
                <h3>Enlaces de interés</h3>
                <a href="https://www.google.com.ar/" target="_blank">link de interes 1</a>
                <br/><br/> 
                <a href="https://www.google.com.ar/" target="_blank">link de interes 2</a>
              </div>

              <div>
                  <h3>Equipo de Desarrollo</h3>
                  <a href="https://www.google.com.ar/" target="_blank">link desarrollo 1</a>
                  <br/> <br/> 
                  <a href="https://www.google.com.ar/" target="_blank">link desarrollo 2</a>
              </div>

              <div>
                  <h3>Contactate con nosotros</h3>
                  <a href="https://www.google.com.ar/" target="_blank">link de contacto 1</a>
                  <br/> <br/> 
                  <a href="https://www.google.com.ar/" target="_blank">link de contacto 2</a>
              </div>
          </div>

      <br/> 

      <div>
        <hr/>
      </div>
      
      <div className="img">
        <a className="iconos" href="#"><img src={"/iconos/ico1.png"} /></a>
        <a className="iconos" href="#"><img src={"/iconos/ico2.png"} /></a>
        <a className="iconos" href="#"><img src={"/iconos/ico3.png"} /></a>
        <a className="iconos" href="#"><img src={"/iconos/ico4.png"} /></a>
      </div>

      <br />
         
      <div className="derechos">
        <br />
        © 2023 - Todos los derechos reservados - Grupo 7
        <br />
        <br />
      </div>

      </footer>
      
    );
  }