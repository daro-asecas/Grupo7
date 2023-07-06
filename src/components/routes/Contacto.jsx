import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/form.css"


export function Contacto() {
    return (
      <div>
       git add <div className=""></div>
        <h2>QUIENES SOMOS	</h2>	
                  									
																						
         <p> SOMOS LA PRIMERA MULTIMARCA FEDERAL DEDICADA A LA COMERCIALIZACIÓN DE UNIDADES 0KM NACIONALES E IMPORTADAS.																					                                                                            
          NUESTRA CASA MATRÍZ FUE FUNDADA EN LA CIUDAD DE BUENOS AIRES EN MARZO DE 1967.																					
          EN LA CIUDAD DE USHUAIA, NUESTRA ÚLTIMA APERTURA, ESTAMOS DESDE JULIO DEL 2008 																					
          NUESTRO SERVICIO DE ATENCIÓN POST VENTA CUENTA CON LA MEJOR TECNOLOGÍA INSTALADA DEL PAÍS																					
          LOS REPUESTOS Y ACCESORIOS DE EXCELENCIA NOS UBICAN EN EL 1º PUESTO EN EL MERCADO AUTOMOTOR																					
          LA CORDIALIDAD Y EL PROFESIONALISMO SON NUESTROS ATRIBUTOS FUNDAMENTALES		</p>																			
        
     <div className='form'>
      <Form>


        <br /> <br /> <br /> <br />
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
    </div>
    </div>
    );
  }