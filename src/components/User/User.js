import React, { Component } from "react";
import Translate from "../../lang/Translate";
import axios from "axios";
import UserTabs from "./UserTabs";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

class User extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            user: [],
            activeTab: '1',
            publications: [],
            comments: []
        };
    }

    componentDidMount(){
        const {handle} = this.props.match.params;
        axios.get(`http://localhost:80/api/user/${handle}`)
            .then(response =>{
                this.setState({user: response.data});
                return axios.get(`http://localhost:80/api/user/${this.state.user.id}/publications`);
            })
            .then(response =>{
                this.setState({publications: response.data});
                return axios.get(`http://localhost:80/api/user/${this.state.user.id}/comment`);
            })
            .then(response =>{
                this.setState({comments: response.data});
        })
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        let user = this.state.user;

        return (
            <main role="main" class="container-fluid">
                <div class="row mx-2 mx-md-5 pt-5">
                    <div class="col-3 col-md-4 ml-5 d-flex justify-content-end">
                        <a href="#">
                            <img class="d-none d-md-block rounded-circle nostoryborder mr-5" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" width="150px" height="150px"/>
                            <img class="d-block d-md-none rounded-circle nostoryborder" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" width="100px" height="100px"/>
                        </a>
                    </div>
                    <div class="col pl-4 pt-2">
                        <div class="row">
                            <div class="col">
                                <a href="#" class="d-inline-block mb-3 h3 text-decoration-none text-dark">{user.userName}</a>
                                <a href="#" class="ml-3 px-4 btn btn-sm btn-light border mt-n2 d-none d-md-inline-block"><Translate string={'follow'}/></a>
                                <UncontrolledDropdown setActiveFromChild className="d-inline-block cursor-pointer">
                                    <DropdownToggle tag="a" className="btn btn-link text-secondary dropdown-toggle text-decoration-none" caret>
                                        <i className='fa fa-ellipsis-h'></i>
                                    </DropdownToggle>
                                    <DropdownMenu right className="dropdown-menu-left">
                                        <DropdownItem tag="a" href="#" className="btn btn-link"><i className='fas fa-exclamation-circle' aria-hidden='true'></i> <Translate string={'report'}/></DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <br class="d-inline-block d-md-none"/>
                                    <a href="#" class="px-4 btn btn-sm btn-light border mt-n2 d-inline-block d-md-none"><Translate string={'follow'}/></a>
                            </div>
                        </div>
                        <div class="row mt-2 d-none d-md-block">
                            <div class="col">
                                <div class="d-inline text-center"><b>{user.publications}</b> <small class="text-secondary d-lg-none"><b><Translate string={'posts'}/></b></small><span class="d-md-none d-lg-inline text-secondary"><Translate string={'posts'}/></span></div>
                                <div class="d-inline text-center"><b class="ml-md-3">{user.followers_num}</b> <small class="text-secondary d-lg-none"><b><Translate string={'followers'}/></b></small><span class="d-md-none d-lg-inline text-secondary"><Translate string={'followers'}/></span></div>
                                <div class="d-inline text-center"><b class="ml-md-3">{user.follows_num}</b> <small class="text-secondary d-lg-none"><b><Translate string={'following'}/></b></small><span class="d-md-none d-lg-inline text-secondary"><Translate string={'following'}/></span></div>
                            </div>
                        </div>
                        <div class="row mt-4 d-none d-md-block">
                            <div class="col">
                                <p>{user.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-block d-md-none">
                    <div class="col">
                        <div class="mx-0 mx-sm-5 row mt-3">
                            <div class="col text-center"><b>{user.publications}</b><br/> <small class="text-secondary"><b><Translate string={'posts'}/></b></small></div>
                            <div class="col text-center"><b class="ml-md-3">{user.followers_num}</b><br/> <small class="text-secondary"><b><Translate string={'followers'}/></b></small></div>
                            <div class="col text-center"><b class="ml-md-3">{user.follows_num}</b><br/> <small class="text-secondary"><b><Translate string={'following'}/></b></small></div>
                        </div>
                        <div class="mx-0 mx-sm-5 row mt-4">
                            <div class="col">
                                <p>{user.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-0 mx-lg-5 mt-4 d-flex justify-content-center">
                    <div className="col col-lg-10 col-xl-8 mb-3 px-0 mx-n2">
                        <UserTabs user={user} tab={this.state.activeTab} onTabChange={this.toggle} publications={this.state.publications} comments={this.state.comments}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default User;