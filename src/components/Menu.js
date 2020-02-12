import React, { useState } from 'react';
import {
	  Container, 
	  Row, 
	  Col,
	  Collapse,
	  Navbar,
	  NavbarToggler,
	  NavbarBrand,
	  Nav,
	  NavItem,
	  NavLink,
	  UncontrolledDropdown,
	  DropdownToggle,
	  DropdownMenu,
	  DropdownItem,
	  NavbarText,
	  Button
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
	    <Container className="sticky" fluid={true}>
		    <Row className="bg-custom-secondary pt-2">
		        <Col className="d-flex justify-content-start">
		        
		        <UncontrolledDropdown setActiveFromChild>
		            <DropdownToggle tag="a" className="btn btn-link text-light dropdown-toggle text-decoration-none" caret>
		            <img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="CA" src="http://www.goatrails.dawman.info/img/lang/Catala.png" width="20px"/>
		            <span className='d-inline d-md-none'>
		          	CA            		</span>
		    		<span className='d-none d-md-inline'>
		          	Catala            		</span>
		            </DropdownToggle>
		            <DropdownMenu className="dropdown-menu-right">
		              <DropdownItem tag="button" href="#" className="btn btn-link bg-light"><img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="CA" src="http://www.goatrails.dawman.info/img/lang/Catala.png" width="20px"/>Catala</DropdownItem>
		              <DropdownItem tag="button" href="#" className="btn btn-link"><img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="EN" src="http://www.goatrails.dawman.info/img/lang/English.png" width="20px"/>English</DropdownItem>
		              <DropdownItem tag="button" href="#" className="btn btn-link"><img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="ES" src="http://www.goatrails.dawman.info/img/lang/Español.png" width="20px"/>Español</DropdownItem>
		              <DropdownItem tag="button" href="#" className="btn btn-link"><img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="FR" src="http://www.goatrails.dawman.info/img/lang/Français.png" width="20px"/>Français</DropdownItem>
		            </DropdownMenu>
		        </UncontrolledDropdown>
		            
		        </Col>
		    	<Col className="d-flex justify-content-end">
				    <div className='d-none d-md-block'>
				    	<Button size="sm" color="light" href='#' className='text-primary rounded'>
				    		Iniciar Sessió	</Button>
				    	<Button outline size="sm" color="light" href='#' className='ml-2 rounded'>
				    		Registre	</Button>
				    </div>
				                          
				    <div className='d-block d-md-none'>
				    
					    <UncontrolledDropdown setActiveFromChild>
				            <DropdownToggle tag="a" className="btn btn-link text-light dropdown-toggle text-decoration-none" caret>
				            <i className='fas fa-user'></i>
				            </DropdownToggle>
				            <DropdownMenu right className="dropdown-menu-left">
				              <DropdownItem tag="a" href="#" className="btn btn-link"><i className='fas fa-sign-in-alt' aria-hidden='true'></i> Iniciar Sessió</DropdownItem>
				              <DropdownItem tag="a" href="#" className="btn btn-link"><i className='far fa-id-card' aria-hidden='true'></i> Registre</DropdownItem>
				            </DropdownMenu>
			            </UncontrolledDropdown>
				    		    
				    </div>    	
				</Col>
			</Row>
		</Container>
	
		<Navbar color="light" light expand="md" className="bg-light p-2 shadow-sm sticky-top sticky-nav">
	        <NavbarBrand href="/">
	        	<img src="http://dev.goatrails.dawman.info/img/logo.png" className="rounded mr-2 float-left" alt="" height="50px"/>
	        	<h1 className="text-custom-secondary">GOATrails</h1>
	        </NavbarBrand>
	        <NavbarToggler onClick={toggle} />
	        <Collapse isOpen={isOpen} navbar className="h5">
	            <Nav className="ml-4 ml-md-auto" navbar>
	                <NavItem className="mx-1">
	                    <NavLink href="#"><i className="fas fa-home"></i> Inici</NavLink>
	                </NavItem>
	                <NavItem className="mx-1">
	                    <NavLink href="#"><i className="fas fa-route"></i> Llista de rutes</NavLink>
	                </NavItem>
	                <NavItem className="mx-1">
	                	<NavLink href="#"><i className="fas fa-chalkboard-teacher"></i> Cursos</NavLink>
	                </NavItem>
	                <NavItem className="mx-1">
	                	<NavLink href="#"><i className="fas fa-users"></i> Social</NavLink>
	                </NavItem>
	            
	            </Nav>
	        </Collapse>
	    </Navbar>
    </div>
  );
}

export default Example;