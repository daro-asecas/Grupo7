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

export function Financiacion() {
    return (

      <Form className="container position-relative">
      <h2>FINANCIACION</h2> 
      <img className="mx-auto img-fluid" src={"/financiacion.jpg"} />
      <br />

      <div className="container">
              <h2>Datos Personales</h2>
              <br />       									
              <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
                <Form.Label>Correo electrónico:</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

            <Form.Group className="mb-3 col-md-4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Seleccione:</Form.Label>
              <Form.Select defaultValue="Choose...">
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
              
            <Button className="mx-auto" onClick={Alerta} /*type="submit"*/>Enviar</Button>
            <br />
            <br />
            <Button className="mx-auto" /*type="submit"*/>Volver</Button>
      </div>
      
      <br />
      <br />
    </Form>
    );
  }