import React, { Component } from "react";
import Translate from "../../lang/Translate";
import DropdownLogin from "../DropdownLogin";
import DropdownProfile from "../DropdownProfile";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

class UserPublication extends Component {
    constructor(props) {
        super(props);
    }

    hasImg(){
        return (this.props.img === "") ? false : true;
    }

    render() {
        return (
            <div className="row mx-2 mx-md-5 mb-4">
                <div className="col-1 d-none d-md-block">
                </div>
                <div className="col col-md-10">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-publications" role="tabpanel"
                             aria-labelledby="nav-publications-tab">
                            <div className="card gedf-card mt-3">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <a href={`/user/${this.props.userName}`}>
                                                <img title={this.props.userName}
                                                     className="d-flex mr-3 rounded-circle shadow-sm storyborder"
                                                     src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                                     width="50px"/>
                                            </a>
                                            <div className="ml-2">
                                                <a href={`/user/${this.props.userName}`} title={this.props.userName}
                                                   className="d-block h5 m-0 text-decoration-none text-dark">{this.props.userName} </a>
                                                <small className="text-muted h7 mb-2"> <i
                                                    className="fa fa-clock-o"></i> 10 min</small>
                                            </div>
                                        </div>
                                        <UncontrolledDropdown setActiveFromChild className="d-inline-block cursor-pointer">
                                            <DropdownToggle tag="a" className="btn btn-link text-secondary dropdown-toggle text-decoration-none" caret>
                                                <i className='fa fa-ellipsis-h'></i>
                                            </DropdownToggle>
                                            <DropdownMenu right className="dropdown-menu-left">
                                                <DropdownItem tag="a" href="#" className="btn btn-link"><i className='fas fa-exclamation-circle' aria-hidden='true'></i> <Translate string={'report'}/></DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>

                                </div>

                                <div className="card-body">
                                    {this.hasImg() ? (<img src={`http://localhost:80/img/${this.props.img}`} className="img-fluid" alt=""/>) : ('')}
                                    <p className="card-text">{this.props.text}</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="text-old-primary mr-2"><i className="far fa-heart h4"></i>
                                        <small className="h6">{this.props.likes}</small></a>
                                    <a href="#" className="text-secondary mx-2"><i className="fas fa-comments h4"></i>
                                        <small className="h6">{this.props.comment}</small></a>
                                    <a href="#" className="text-secondary mx-2"><i className="fas fa-share h4"></i></a>
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
                </div>
                <div className="col-1 d-none d-md-block">
                </div>
            </div>
        );
    }
}

export default UserPublication;