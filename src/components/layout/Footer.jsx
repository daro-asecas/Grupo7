import "../../styles/footer.css"

export function Footer() {
    return (

      <footer className="footer">
       
          <div className="contenedor">
            <img className="logo" src={"/logo.png"} />

            <div>
                <h3>Enlaces de interés</h3>
                <a href="https://www.google.com.ar/">link de interes 1</a>
                <br/><br/> 
                <a href="https://www.google.com.ar/">link de interes 2</a>
              </div>

              <div>
                  <h3>Equipo de Desarrollo</h3>
                  <a href="https://www.google.com.ar/">link desarrollo 1</a>
                  <br/> <br/> 
                  <a href="https://www.google.com.ar/">link desarrollo 2</a>
              </div>

              <div>
                  <h3>Contactate con nosotros</h3>
                  <a href="https://www.google.com.ar/">link de contacto 1</a>
                  <br/> <br/> 
                  <a href="https://www.google.com.ar/">link de contacto 2</a>
              </div>
          </div>

      <br/> 

      <div>
        <hr/>
      </div>
      
      <div className="img">
        <img className="iconos" src={"/ico2.png"} />
        <img className="iconos" src={"/ico1.png"} />
        <img className="iconos" src={"/ico3.png"} />
        <img className="iconos" src={"/ico4.png"} />
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