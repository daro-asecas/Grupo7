import "../../styles/footer.css"

export function Footer() {
    return (

      <footer className="footer">
          <div className="contenedor">
            <img className="logo" src={"/logo.jpeg"} />
            <div>
                <br/>
                <h4>ENLACES DE INTERÉS</h4>
                <br/>
                <a className="linksFooter" href="#" target="_blank">Empresa</a>
                <br/>
                <a className="linksFooter" href="#" target="_blank">Preguntas frecuentes</a>
                <br/>
                <a className="linksFooter" href="#" target="_blank">Términos y condiciones</a>
                <br/>
                <a className="linksFooter" href="#" target="_blank">Política de privacidad</a>
                
              </div>

              <div>
                  <br/>
                  <h4>EQUIPO DE DESARROLLO</h4>
                  <p>Darío Ajzensztad</p>
                  <p>Marcelo Baranowski</p>
                  <p>Darío Levenson</p>
                  <p>Juan Pablo Rodríguez</p>
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