import React, { Component } from 'react';
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
import DropdownLogin from "./DropdownLogin";
import DropdownProfile from "./DropdownProfile";
import LanguagePicker from "./LanguagePicker.js";

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			flag: false
		};

		this.toggle = this.toggle.bind(this);
		this.closeSesion = this.closeSesion.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeSesion(){
		this.setState({flag:true})
	}

	isLogged(){
		return (this.state.flag) ? false : this.props.login;
	}

	render() {
		console.log(this.props.login);
		  return (
				    <div>
					    <Container className="sticky" fluid={true}>
						    <Row className="bg-custom-secondary pt-2">
						        <Col className="d-flex justify-content-start">
						        
						        <LanguagePicker changeLanguage={this.props.changeLanguage} preferredLocale={this.props.preferredLocale} />
						            
						        </Col>
						        
						    	<Col className="d-flex justify-content-end">
						    	 	{!this.isLogged() ? (<DropdownLogin/>) : (<DropdownProfile callback={this.closeSesion.bind(this)} />)}
								</Col>
							</Row>
						</Container>
					
						<Navbar color="light" light expand="md" className="bg-light p-2 shadow-sm sticky-top sticky-nav">
					        <NavbarBrand href="/">
					        	<img src="http://dev.goatrails.dawman.info/img/logo.png" className="rounded mr-2 float-left" alt="" height="50px"/>
					        	<h1 className="text-custom-secondary">GOATrails</h1>
					        </NavbarBrand>
					        <NavbarToggler onClick={this.toggle} />
					        <Collapse isOpen={this.state.isOpen} navbar className="h5">
					            <Nav id="menuTabs" className="ml-4 ml-md-auto" navbar>
					                <NavItem className="mx-1">
										<Link className="text-decoration-none" exact to='/'><NavLink><i className="fas fa-home"/> <Translate string={'home'}/></NavLink></Link>
					                </NavItem>
					                <NavItem className="mx-1">
										<Link className="text-decoration-none" to='/routes'><NavLink><i className="fas fa-route"/> <Translate string={'routes'}/></NavLink></Link>
					                </NavItem>
					                <NavItem className="mx-1">
										<Link className="text-decoration-none" to="/courses"><NavLink><i className="fas fa-chalkboard-teacher"/> <Translate string={'courses'}/></NavLink></Link>
					                </NavItem>
					                <NavItem className="mx-1">
										<Link className="text-decoration-none" to="/social"><NavLink><i className="fas fa-users"/> <Translate string={'social'}/></NavLink></Link>
					                </NavItem>
					            
					            </Nav>
					        </Collapse>
					    </Navbar>
				    </div>
				  );
	}
}

export default Menu;