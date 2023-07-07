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

export function Financiacion() {
    return (

      <Form className="container position-relative">
      <h2>Financiación</h2> 
      <img className="mx-auto img-fluid" src={"/financiacion.jpg"} />
      <br />

      <div className="container">
              <br />       									
              <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="email" placeholder="Nombre y Apellido" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="email" placeholder="Teléfono" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

            <Form.Group className="mb-3 col-md-4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Marca</Form.Label>
              <Form.Select defaultValue="Seleccione...">
                <option>Seleccione...</option>
                <option>Chevrolet</option>
                <option>Citroen</option>
                <option>Nissan</option>
                <option>Peugeot</option>
                <option>Renault</option>
                <option>Toyoyta</option>
                <option>Volkswagen</option>
              </Form.Select>
            </Form.Group>

            <div class="botones mx-auto">
              <Button className="boton-enviar" onClick={Alerta} /*type="submit"*/>Enviar</Button>
            </div>
      </div>
      
      <br />
      <br />
    </Form>
    );
  }