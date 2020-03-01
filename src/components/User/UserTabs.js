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
import Translate from "../../lang/Translate";
import UserPublication from "./UserPublication";
import Comment from "../Comment";
import UserArchievements from "./UserArchievements";
import UserRoutes from "./UserRoutes";
import UserCourses from "./UserCourses";
import axios from "axios";

class UserTabs extends Component{
    constructor(props) {
        super(props);
    }

    changeTab(tab){
        this.props.onTabChange(tab);
    }

    mountPublications(id, img, text, user, route, commentNum, likesNum){
        return (<UserPublication id={id} img={img} text={text} user={user} route={route} commentNum={commentNum} likesNum={likesNum} userName={this.props.user.userName}/>)
    }

    mountComments(id, userId, text, responseId){
        return (<Comment id={id} userId={userId} text={text} responseId={responseId}/>)
    }

    render() {
         return (
             <div>
                 <hr/>
                 <Nav id="perfilTabs" className="d-flex justify-content-center border-0" tag="div">
                     <NavItem className="border-0 p-0 mr-1 mr-sm-3 nav-item nav-link cursor-pointer">
                         <NavLink
                             className={classnames({ active: this.props.tab === '1' })}
                             onClick={() => {this.changeTab('1')}}
                         >
                             <i className="fas fa-th d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-th"></i> <Translate string={'posts'}/></span>
                         </NavLink>
                     </NavItem>
                     <NavItem className="border-0 p-0 mx-1 mx-sm-3 nav-item nav-link cursor-pointer">
                         <NavLink
                             className={classnames({ active: this.props.tab === '2' })}
                             onClick={() => {this.changeTab('2')}}
                         >
                             <i className="fas fa-comments d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-comments"></i> <Translate string={'comments'}/></span>
                         </NavLink>
                     </NavItem>
                     <NavItem className="border-0 p-0 ml-1 ml-sm-3 nav-item nav-link cursor-pointer">
                         <NavLink
                             className={classnames({ active: this.props.tab === '3' })}
                             onClick={() => {this.changeTab('3')}}
                         >
                             <i className="fas fa-award d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-award"></i> <Translate string={'achievements'}/></span>
                         </NavLink>
                     </NavItem>
                     <NavItem className="border-0 p-0 mx-1 mx-sm-3 nav-item nav-link cursor-pointer">
                         <NavLink
                             className={classnames({ active: this.props.tab === '4' })}
                             onClick={() => {this.changeTab('4')}}
                         >
                             <i className="fas fa-route d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-route"></i> <Translate string={'routes'}/></span>
                         </NavLink>
                     </NavItem>
                     <NavItem className="border-0 p-0 ml-1 ml-sm-3 nav-item nav-link cursor-pointer">
                         <NavLink
                             className={classnames({ active: this.props.tab === '5' })}
                             onClick={() => {this.changeTab('5')}}
                         >
                             <i className="fas fa-chalkboard-teacher d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-chalkboard-teacher"></i> <Translate string={'courses'}/></span>
                         </NavLink>
                     </NavItem>
                 </Nav>
                 <hr/>
                 <TabContent activeTab={this.props.tab}>
                     <TabPane tabId="1">
                         {this.props.publications.map(res => this.mountPublications
                         (res.id, res.img, res.text, res.user, res.route, res.commentNum, res.likesNum))}
                     </TabPane>
                     <TabPane tabId="2">
                         {this.props.comments.map(res => this.mountComments
                         (res.id, res.userId, res.text, res.responseId))}
                     </TabPane>
                     <TabPane tabId="3">
                         <UserArchievements />
                     </TabPane>
                     <TabPane tabId="4">
                         <UserRoutes />
                     </TabPane>
                     <TabPane tabId="5">
                         <UserCourses />
                     </TabPane>
                 </TabContent>
             </div>
         );
    }
}

export default UserTabs;