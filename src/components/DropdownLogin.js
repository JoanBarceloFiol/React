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
    Button, NavLink
} from 'reactstrap';
import Translate from "../lang/Translate";


const DropdownLogin = (props) => {
  return (
    <div>
				    <div className='d-none d-md-block'>
                        <Link className="text-decoration-none" to='/login'>
                            <Button size="sm" color="light" className='text-primary rounded'>
                                <Translate string={'login'}/>
                            </Button>
                        </Link>
                        <Link className="text-decoration-none" to='/register'>
                            <Button outline size="sm" color="light" href='/register' className='ml-2 rounded'>
                                <Translate string={'register'}/>
                            </Button>
                        </Link>
				    </div>
				                  
				    <div className='d-block d-md-none'>
				    
					    <UncontrolledDropdown setActiveFromChild>
				            <DropdownToggle tag="a" className="btn btn-link text-light dropdown-toggle text-decoration-none" caret>
				            <i className='fas fa-user'/>
				            </DropdownToggle>
				            <DropdownMenu right className="dropdown-menu-left">
				              <DropdownItem tag="a" href="/login" className="btn btn-link"><i className='fas fa-sign-in-alt' aria-hidden='true'/> <Translate string={'login'}/></DropdownItem>
				              <DropdownItem tag="a" href="/register" className="btn btn-link"><i className='far fa-id-card' aria-hidden='true'/> <Translate string={'register'}/></DropdownItem>
				            </DropdownMenu>
			            </UncontrolledDropdown>
				    		    
				    </div>    	
    </div>
  );
}

export default DropdownLogin;