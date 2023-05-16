import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function Contacto() {
    return (
      <Form>
        <br /><br /><br /><br /><br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ingrese su consulta</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <br /><br /><br />
    </Form>
    );
  }