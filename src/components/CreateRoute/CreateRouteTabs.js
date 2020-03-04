import React, {Component} from 'react';
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
import Step1 from "./Step1";
import Step2 from "./Step2";

class CreateRouteTabs extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Nav id="perfilTabs" className="d-flex justify-content-center border-0 mb-3" tag="div">
                    <NavItem className="border rounded-circle p-0 mr-1 mr-sm-3 nav-item nav-link cursor-pointer">
                        <NavLink
                            className={classnames({ active: this.props.tab === '1' })}
                            onClick={() => {this.props.onTabChange('1')}}
                        >
                            <span>1</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="border rounded-circle  p-0 mx-1 mx-sm-3 nav-item nav-link cursor-pointer">
                        <NavLink
                            className={classnames({ active: this.props.tab === '2' })}
                            onClick={() => {this.props.onTabChange('2')}}
                        >
                            <span>2</span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.props.tab}>
                    <TabPane tabId="1">
                        <Step1 onTabChange={this.props.onTabChange}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Step2 />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default CreateRouteTabs;