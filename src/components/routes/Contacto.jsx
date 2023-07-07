import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import "../../styles/body.css"

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
      <Form className="body container">

        <h2>Contacto y consultas</h2>	

        <Form.Group className="mb-3 col-md-4  mx-auto" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-md-4  mx-auto" controlId="formBasicPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="phone" placeholder="Teléfono" />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-md-4 mx-auto" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={8} />
          
        <br />

        <div className="botones mx-auto">
          <Button className="boton-enviar" onClick={Alerta}  variant="primary" /*type="submit"*/>Enviar</Button>
        </div>

        </Form.Group>
              
    </Form>
    
    );
  }