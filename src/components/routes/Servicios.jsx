import "../../styles/form.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export function Servicios() {
    return (
      <div>																		
                                                                                      
      <div className='form'>
      <Form>
       
      <Row className="mb-3" with >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control  placeholder="Nombre" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Auto y Modelo</Form.Label>
        <Form.Control placeholder="Renaul Kangoo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describa el problema</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Provincia</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Seleccione...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Turno</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Seleccione...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
    
    </Form>
     </div>
    </div>  
    );
  }