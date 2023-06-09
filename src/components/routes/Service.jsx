import "../../styles/form.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from "sweetalert2";

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


export function Service() {
    return (
      <Form className="body container">

        <h2>SERVICE / POST-VENTA</h2>	
      
        <Row className="mb-3" with >
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control  placeholder="Nombre" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Auto y Modelo</Form.Label>
          <Form.Control placeholder="Renault Kangoo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Describa el problema</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control placeholder="Ciudad" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Turno</Form.Label>
            <Form.Select defaultValue="Seleccione...">
              <option  disabled>Seleccione...</option>
              <option> 8 a 11 hs</option>
              <option>11 a 14 hs</option>
              <option>14 a 17 hs</option>
              <option>17 a 20 hs</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Compré en Cars Seven" />
        </Form.Group>

        <div className="botones mx-auto">
          <Button className='boton-enviar' onClick={Alerta} variant="primary" /*type="submit"*/>Enviar</Button>
        </div>
      
    </Form>
    );
  }