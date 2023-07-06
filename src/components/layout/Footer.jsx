import "../../styles/footer.css"

export function Footer() {
    return (

      <footer className="footer">
          <div className="contenedor">
            <img className="logo" src={"/logo.jpeg"} />
            <div>
                <br/>
                <h4>Enlaces de interés</h4>
                <br/>
                <a className="linksFooter" href="#" target="_blank">Empresa</a>
                <br/>
                <br/>
                <a className="linksFooter" href="#" target="_blank">Preguntas frecuentes</a>
              </div>

              <div>
                  <br/>
                  <h4>Equipo de Desarrollo</h4>
                  <br/>
                  <a className="linksFooter" href="#" target="_blank">Términos y condiciones</a>
                  <br/>
                  <br/>
                  <a className="linksFooter" href="#" target="_blank">Política de privacidad</a>
              </div>

              <div>
                  <br/>
                  <h4>Contactate con nosotros</h4>
                  <br/>
                  <a className="linksFooter" href="#" target="_blank">Cookies</a>
                  <br/>
                  <br/>
                  <a className="linksFooter" href="#" target="_blank">Acceso empleados</a>
              </div>
          </div>

      <div>

      <hr/>

      </div>
      
      <div className="img">
        <a className="iconos" href="#"><img src={"/iconos/face.png"} /></a>
        <a className="iconos" href="#"><img src={"/iconos/insta.png"} /></a>
        <a className="iconos" href="#"><img src={"/iconos/mail.png"} /></a>
      </div>
      <br />

         
      <div className="derechos">
        <br />
        Grupo 7 © 2023
        <br />
        <br />
      </div>

      </footer>
      
    );
  }