import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import "../../styles/contacto.css"

const Alerta = () => {
  Swal.fire({
  imageUrl: "res.jpg",
  title: "Datos recibidos",
  text: 'En breve recibirá una respuesta',
  imageWidth: 270,
  imageHeight: 290,
  imageAlt: '',
 })
}

export function Contacto() {
    return (
      <Form className="container">

            <h2>Contacto y consultas</h2>	

            <p> SOMOS UNA MULTIMARCA FEDsERAL DEDICADA A LA COMERCIALIZACIÓN DE UNIDADES 0KM NACIONALES E IMPORTADAS.																					                                                                            
              NUESTRA CASA MATRÍZ FUE FUNDADA EN LA CIUDAD DE BUENOS AIRES EN MARZO DE 1967.																																										
              NUESTRO SERVICIO DE ATENCIÓN POST VENTA CUENTA CON LA MEJOR TECNOLOGÍA DEL PAÍS	Y																			
              LOS REPUESTOS Y ACCESORIOS DE EXCELENCIA NOS UBICAN EN EL 1º PUESTO EN EL MERCADO AUTOMOTOR.																				
              CORDIALIDAD Y PROFESIONALISMO SON NUESTROS ATRIBUTOS FUNDAMENTALES.</p>

        <br />

      <div className="container">

      <Form.Group className="mb-3 col-md-4  mx-auto" controlId="formBasicEmail">
        <Form.Label>Ingrese correo electrónico:</Form.Label>
        <Form.Control type="email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-md-4 mx-auto" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ingrese su consulta:</Form.Label>
        <Form.Control as="textarea" rows={3} />
        
      <br />

      <div className="botones mx-auto">
      <Button className='boton-enviar'onClick={Alerta}  variant="primary" /*type="submit"*/>Enviar</Button>
      <Button className='boton-volver' variant="primary" /*type="submit"*/>Volver</Button>
      </div>

      </Form.Group>
            
      </div>
      
      <br />




    </Form>
    
    );
  }