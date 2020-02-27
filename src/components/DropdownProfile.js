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

class DropdownProfile extends React.Component {

	constructor(props) {
		super(props);

		this.closeSession = this.closeSession.bind(this);
	}

	closeSession() {
		localStorage.setItem('myData', null);
		console.log(localStorage.getItem('myData'));
		this.props.callback();

	}

	render() {
		return (
			<div>
				<UncontrolledDropdown setActiveFromChild>
					<DropdownToggle tag="a" className="btn btn-link text-light dropdown-toggle text-decoration-none" caret>
						<i className='fas fa-user'></i>
					</DropdownToggle>
					<DropdownMenu right className="dropdown-menu-left">
					<Link className="text-decoration-none" to="/courses"><DropdownItem tag="a" className="btn btn-link"><i className='fas fa-user' aria-hidden='true'></i> <Translate string={'myProfile'}/></DropdownItem></Link>
					<Link className="text-decoration-none" to="/my-routes"><DropdownItem tag="a" className="btn btn-link"><i className='fas fa-route' aria-hidden='true'></i> <Translate string={'myRoute'}/></DropdownItem></Link>
					<Link className="text-decoration-none" to="/my-courses"><DropdownItem tag="a" className="btn btn-link"><i className='fas fa-chalkboard-teacher' aria-hidden='true'></i> <Translate string={'myCourses'}/></DropdownItem></Link>
						<DropdownItem tag="a" onClick={this.closeSession} className="btn btn-link"><i className='fas fa-sign-out-alt' aria-hidden='true'></i> <Translate string={'logout'}/></DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
			</div>
		);
	}
}

export default DropdownProfile;