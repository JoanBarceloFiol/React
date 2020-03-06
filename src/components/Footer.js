import React  from 'react';
import { 
	Container, 
	Row, 
	Col
	} from 'reactstrap';
import Translate from "../lang/Translate";
import {Link} from "react-router-dom";

class Footer extends React.Component {

    render() {
      return (
    		  <Container className="footer" tag="footer" fluid={true}>
		    	<Row className="bg-secondary" id="footer-top">
		          	<Col className="px-5 text-center my-auto">
		              	<li className="list-inline-item">
		                    <p className="text-light h5"><Translate string={'registerFree'}/></p>
		                </li>
		                <li className="list-inline-item">
		                    <Link to="/register" className="btn btn-outline-light rounded">
		                    <Translate string={'signUp'}/>
		                    </Link>
		            	</li>
		          	</Col>
		        </Row>
		        <Row className="text-center bg-dark p-2">
		            <Col className="col text-center bg-dark p-2">
		            	<Link to="#" className="text-secondary">&copy; {(new Date().getFullYear())} Copyright - GOATrails.com</Link>
		            </Col>
		    	</Row>
	        </Container>
      );
    }
  }

export default Footer;