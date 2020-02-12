import React from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Menu from './components/Menu.js';
import { 
	Container, 
	Row, 
	Col, 
	Dropdown, 
	DropdownToggle, 
	DropdownMenu, 
	DropdownItem, 
	UncontrolledDropdown, 
	Button,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText
	} from 'reactstrap';

	
class App extends React.Component {

	constructor(props) {
	  super(props);
	  }
        
	render() {
	    return (
	    	<div id="page">
	    	
	    	<Menu></Menu>
	        
	        <main role="main" className="container-fluid"></main>
	        
	        
	        <Footer></Footer>
      
	    	 </div>
	    );
	}
}

export default App;
