import React, { useState } from 'react';
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
import Translate from "../../lang/Translate";

const UserTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <hr/>
            <Nav id="perfilTabs" className="d-flex justify-content-center border-0" tag="div">
                <NavItem className="border-0 p-0 mr-1 mr-sm-3 nav-item nav-link cursor-pointer">
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        <i className="fas fa-th d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-th"></i> <Translate string={'posts'}/></span>
                    </NavLink>
                </NavItem>
                <NavItem className="border-0 p-0 mx-1 mx-sm-3 nav-item nav-link cursor-pointer">
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        <i className="fas fa-comments d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-comments"></i> <Translate string={'comments'}/></span>
                    </NavLink>
                </NavItem>
                <NavItem className="border-0 p-0 ml-1 ml-sm-3 nav-item nav-link cursor-pointer">
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        <i className="fas fa-award d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-award"></i> <Translate string={'achievements'}/></span>
                    </NavLink>
                </NavItem>
                <NavItem className="border-0 p-0 mx-1 mx-sm-3 nav-item nav-link cursor-pointer">
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        <i className="fas fa-route d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-route"></i> <Translate string={'history'}/></span>
                    </NavLink>
                </NavItem>
                <NavItem className="border-0 p-0 ml-1 ml-sm-3 nav-item nav-link cursor-pointer">
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => { toggle('5'); }}
                    >
                        <i className="fas fa-chalkboard-teacher d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-chalkboard-teacher"></i> <Translate string={'history'}/></span>
                    </NavLink>
                </NavItem>
            </Nav>
            <hr/>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <h2><Translate string={'posts'}/></h2>
                </TabPane>
                <TabPane tabId="2">
                    <h2><Translate string={'comments'}/></h2>
                </TabPane>
                <TabPane tabId="3">
                    <h2><Translate string={'achievements'}/></h2>
                </TabPane>
                <TabPane tabId="4">
                    <h2><Translate string={'routes'}/></h2>
                </TabPane>
                <TabPane tabId="5">
                    <h2><Translate string={'courses'}/></h2>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default UserTabs;