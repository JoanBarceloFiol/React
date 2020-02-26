import React from 'react';
import {Link} from "react-router-dom";
import {
	  Container, 
	  Row, 
	  Col,
	  UncontrolledDropdown,
	  DropdownToggle,
	  DropdownMenu,
	  DropdownItem,
	  Button
} from 'reactstrap';
import Translate from "../lang/Translate";

function closeSession() {
	localStorage.setItem('myData', null);
	console.log(localStorage.getItem('myData'));

}

const DropdownProfile = (props) => {
  return (
    <div>
					    <UncontrolledDropdown setActiveFromChild>
				            <DropdownToggle tag="a" className="btn btn-link text-light dropdown-toggle text-decoration-none" caret>
				            <i className='fas fa-user'></i>
				            </DropdownToggle>
				            <DropdownMenu right className="dropdown-menu-left">
				              <DropdownItem tag="a" href="#" className="btn btn-link"><i className='fas fa-user' aria-hidden='true'></i> <Translate string={'myProfile'}/></DropdownItem>
				              <DropdownItem tag="a" href="#" className="btn btn-link"><i className='fas fa-route' aria-hidden='true'></i> <Translate string={'myRoute'}/></DropdownItem>
				              <DropdownItem tag="a" href="#" className="btn btn-link"><i className='fas fa-chalkboard-teacher' aria-hidden='true'></i> <Translate string={'myCourses'}/></DropdownItem>
				              <DropdownItem tag="a" onClick={closeSession} className="btn btn-link"><i className='fas fa-sign-out-alt' aria-hidden='true'></i> <Translate string={'logout'}/></DropdownItem>
				            </DropdownMenu>
			            </UncontrolledDropdown>   	
    </div>
  );
}

export default DropdownProfile;