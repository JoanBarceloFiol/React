import React, { useState } from 'react';
import {Link} from "react-router-dom";
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
	  Button
} from 'reactstrap';
import Translate from "../lang/Translate";
import LanguagePicker from "./LanguagePicker.js";


const Menu = (props) => {
	
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
	    <Container className="sticky" fluid={true}>
		    <Row className="bg-custom-secondary pt-2">
		        <Col className="d-flex justify-content-start">
		        
		        <LanguagePicker changeLanguage={props.changeLanguage} />
		            
		        </Col>
		    	<Col className="d-flex justify-content-end">
				    <div className='d-none d-md-block'>
				    	<Button size="sm" color="light" href='#' className='text-primary rounded'>
				    	<Translate string={'login'}/>	</Button>
				    	<Button outline size="sm" color="light" href='#' className='ml-2 rounded'>
				    	<Translate string={'register'}/>	</Button>
				    </div>
				                          
				    <div className='d-block d-md-none'>
				    
					    <UncontrolledDropdown setActiveFromChild>
				            <DropdownToggle tag="a" className="btn btn-link text-light dropdown-toggle text-decoration-none" caret>
				            <i className='fas fa-user'></i>
				            </DropdownToggle>
				            <DropdownMenu right className="dropdown-menu-left">
				              <DropdownItem tag="a" href="#" className="btn btn-link"><i className='fas fa-sign-in-alt' aria-hidden='true'></i> <Translate string={'login'}/></DropdownItem>
				              <DropdownItem tag="a" href="#" className="btn btn-link"><i className='far fa-id-card' aria-hidden='true'></i> <Translate string={'register'}/></DropdownItem>
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
						<Link exact to='/'><NavLink><i className="fas fa-home"/> <Translate string={'home'}/></NavLink></Link>
	                </NavItem>
	                <NavItem className="mx-1">
						<Link to='/routes'><NavLink><i className="fas fa-route"/> <Translate string={'routes'}/></NavLink></Link>
	                </NavItem>
	                <NavItem className="mx-1">
						<Link to="/courses"><NavLink><i className="fas fa-chalkboard-teacher"/> <Translate string={'courses'}/></NavLink></Link>
	                </NavItem>
	                <NavItem className="mx-1">
						<Link to="/social"><NavLink><i className="fas fa-users"/> <Translate string={'social'}/></NavLink></Link>
	                </NavItem>
	            
	            </Nav>
	        </Collapse>
	    </Navbar>
    </div>
  );
}

export default Menu;