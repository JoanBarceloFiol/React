import React, { useState, Component } from 'react';
import { 
	TabContent, 
	TabPane, 
	Nav, 
	NavItem, 
	NavLink, 
	Card, 
	Button, 
	CardTitle, 
	CardText, 
	Row, 
	Col, 
	CardHeader, 
	CardBody, 
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
	} from 'reactstrap';
import classnames from 'classnames';
import Translate from "../lang/Translate";

class Publicar extends Component{
	
    constructor(props) {
        super(props);
        this.state = {
        	activeTab: '1'
        }
    }

    changeTab(tab){
            if (this.state.activeTab !== tab) {
                this.setState({
                    activeTab: tab
                });
            }
    }
  
  render() {
	  
  return (
    <Card ClassName="gedf-card">
      <CardHeader>
      <Nav tabs className="card-header-tabs">
        <NavItem className="cursor-pointer">
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => {this.changeTab('1')}}
          >
          <Translate string={'publication'}/>
          </NavLink>
        </NavItem>
        <NavItem className="cursor-pointer">
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => {this.changeTab('2')}}
          >
          <Translate string={'images'}/>
          </NavLink>
        </NavItem>
      </Nav>
      </CardHeader>
      <CardBody>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
        <div className="form-group">
        <label className="sr-only" for="message">Compartir</label>
        <textarea className="form-control" id="message" rows="3" placeholder={<Translate string={'whatAreYouThinking'}/>}></textarea>
        </div>
        </TabPane>
        <TabPane tabId="2">
	        <div className="form-group">
	        <div className="custom-file">
	        <input type="file" className="form-control-file" id="customFile"/>
            <label className="custom-file-label" for="customFile"><Translate string={'uploadImage'}/></label>
            </div>
		    </div>
		    <div className="py-4"></div>
        </TabPane>
      </TabContent>
	    <div className="btn-toolbar justify-content-between">
        <div className="btn-group">
            <button type="submit" className="btn btn-primary"><Translate string={'share'}/></button>
        </div>
        
        <UncontrolledDropdown>
        <DropdownToggle tag="a" caret className="btn btn-link text-decoration-none text-old-primary bg-white border-0">
        <i className="fa fa-globe"></i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem><i className="fa fa-globe"></i> <Translate string={'public'}/></DropdownItem>
          <DropdownItem><i className="fas fa-user-lock"></i> <Translate string={'private'}/></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

	    </div>
      </CardBody>
    </Card>
  );
  }
}

export default Publicar;