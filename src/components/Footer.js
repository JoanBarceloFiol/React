import React  from 'react';
import { 
	Container, 
	Row, 
	Col, 
	Button,
	} from 'reactstrap';

class Footer extends React.Component {

    render() {
      return (
    		  <Container className="footer" tag="footer" fluid={true}>
		    	<Row className="bg-secondary" id="footer-top">
		          	<Col className="px-5 text-center my-auto">
		              	<li className="list-inline-item">
		                    <p className="text-light h5">Registra't gratuitament</p>
		                </li>
		                <li className="list-inline-item">
		                    <a href="#" className="btn btn-outline-light rounded">
		                    Registrar-se!
		                    </a>
		            	</li>
		          	</Col>
		        </Row>
		        <Row className="text-center bg-dark p-2">
		            <Col className="col text-center bg-dark p-2">
		            	<a href="#" className="text-secondary">&copy; 2020 Copyright - GOATrails.com</a>
		            </Col>
		    	</Row>
	        </Container>
      );
    }
  }

export default Footer;