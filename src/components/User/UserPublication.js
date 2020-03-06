import React, { Component } from "react";
import Translate from "../../lang/Translate";
import DropdownLogin from "../DropdownLogin";
import DropdownProfile from "../DropdownProfile";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

class UserPublication extends Component {
    constructor(props) {
        super(props);
    }

    hasImg(){
        return (this.props.img === null) ? false : true;
    }

    render() {
        return (
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-publications" role="tabpanel"
                     aria-labelledby="nav-publications-tab">
                    <div className="card gedf-card mt-3">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to={`/user/${this.props.userName}`}>
                                        <img title={this.props.userName}
                                             className="d-flex mr-3 rounded-circle shadow-sm storyborder"
                                             src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                             width="50px"/>
                                    </Link>
                                    <div className="ml-2">
                                        <Link to={`/user/${this.props.userName}`} title={this.props.userName}
                                           className="d-block h5 m-0 text-decoration-none text-dark">{this.props.userName} </Link>
                                        <small className="text-muted h7 mb-2"> <i
                                            className="fa fa-clock-o"></i> 10 min</small>
                                    </div>
                                </div>
                                <UncontrolledDropdown setActiveFromChild className="d-inline-block cursor-pointer">
                                    <DropdownToggle tag="a" className="btn btn-link text-secondary dropdown-toggle text-decoration-none" caret>
                                        <i className='fa fa-ellipsis-h'></i>
                                    </DropdownToggle>
                                    <DropdownMenu right className="dropdown-menu-left">
                                        <DropdownItem className="btn btn-link"><i className='fas fa-exclamation-circle' aria-hidden='true'></i> <Translate string={'report'}/></DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>

                        </div>

                        <div className="card-body p-0">
                            {this.hasImg() ? (<img src={`http://localhost:80${this.props.img}`} className="img-fluid" alt=""/>) : ('')}
                            <p className="card-text py-3 pl-4">{this.props.text}</p>
                        </div>
                        <div className="card-footer">
                            <Link to="#" className="text-old-primary mr-2"><i className="far fa-heart h4"></i>
                                <small className="h6">{this.props.likes}</small></Link>
                            <Link to="#" className="text-secondary mx-2"><i className="fas fa-comments h4"></i>
                                <small className="h6">{this.props.comment}</small></Link>
                            <Link to="#" className="text-secondary mx-2"><i className="fas fa-share h4"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-comments" role="tabpanel"
                     aria-labelledby="nav-contact-tab">...
                </div>
                <div className="tab-pane fade" id="nav-achievements" role="tabpanel"
                     aria-labelledby="nav-achievements-tab">...
                </div>
                <div className="tab-pane fade" id="nav-routes" role="tabpanel"
                     aria-labelledby="nav-routes-tab">...
                </div>
                <div className="tab-pane fade" id="nav-courses" role="tabpanel"
                     aria-labelledby="nav-courses-tab">...
                </div>
            </div>
        );
    }
}

export default UserPublication;