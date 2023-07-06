import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import "../../styles/contacto.css"


const Alerta = () => {
  Swal.fire({
  imageUrl: "res.jpg",
  title: "Datos recibidos",
  text: 'En breve recibirá una respuesta',
  imageWidth: 300,
  imageHeight: 320,
  imageAlt: '',
 })
}


export function FormRepuestos() {
    return (
      <Form className="container">

            <h2>Repuestos</h2>	

        <br />

      <div className="container">

      <Form.Group className="mb-3 col-md-4  mx-auto" controlId="formBasicEmail">
          <Form.Label>Modelo de vehículo</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Seleccione...</option>
            <option>Chevrolet</option>
            <option>Citroen</option>
            <option>Fiat</option>
            <option>Ford</option>
            <option>Nissan</option>
            <option>Peugeot</option>
          </Form.Select>
        </Form.Group>



      <Form.Group className="mb-3 col-md-4  mx-auto" controlId="formBasicEmail">
          <Form.Label>Categoria</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Seleccione...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 col-md-4  mx-auto" controlId="formBasicEmail">
        <Form.Label>Correo electrónico:</Form.Label>
        <Form.Control type="email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-md-4  mx-auto" controlId="formBasicEmail">
        <Form.Label>Número de teléfono</Form.Label>
        <Form.Control type="email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

    
      <Form.Group className="mb-3 col-md-4 mx-auto" controlId="exampleForm.ControlTextarea1">
      <br />

        <div className="botones">
        <Button className="boton-enviar" onClick={Alerta} variant="primary">Buscar</Button>
        <Button className="boton-volver" variant="primary" >Volver</Button>
        </div>


      </Form.Group>
      </div>
      
      <br />
    </Form>
    );
  }