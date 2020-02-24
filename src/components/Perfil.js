import React, { Component } from "react";
import Translate from "../lang/Translate";
import axios from "axios";

class Perfil extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: []
        };
    }

    componentDidMount(){
        const {handle} = this.props.match.params;
        let data = axios.get(`http://localhost:80/api/user/${handle}`);
        data.then( res => {
            const user = res.data;
            this.setState({user});
        });
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
                                <div class="dropdown d-inline-block">
                                    <button class="mt-n1 btn btn-link dropdown-toggle text-decoration-none text-secondary" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right " aria-labelledby="gedf-drop1">
                                        <a class="dropdown-item" href="#"><i class="fas fa-exclamation-circle"></i> <Translate string={'report'}/></a>
                                    </div>
                                </div>
                                <br class="d-inline-block d-md-none"/>
                                    <a href="#" class="px-4 btn btn-sm btn-light border mt-n2 d-inline-block d-md-none"><Translate string={'follow'}/></a>
                            </div>
                        </div>
                        <div class="row mt-2 d-none d-md-block">
                            <div class="col">
                                <div class="d-inline text-center"><b>{user.publications}</b> <small class="text-secondary d-lg-none"><b><Translate string={'posts'}/></b></small><span class="d-md-none d-lg-inline text-secondary"><Translate string={'posts'}/></span></div>
                                <div class="d-inline text-center"><b class="ml-md-3">{user.follows_num}</b> <small class="text-secondary d-lg-none"><b><Translate string={'followers'}/></b></small><span class="d-md-none d-lg-inline text-secondary"><Translate string={'followers'}/></span></div>
                                <div class="d-inline text-center"><b class="ml-md-3">{user.followers_num}</b> <small class="text-secondary d-lg-none"><b><Translate string={'following'}/></b></small><span class="d-md-none d-lg-inline text-secondary"><Translate string={'following'}/></span></div>
                            </div>
                        </div>
                        <div class="row mt-4 d-none d-md-block">
                            <div class="col">
                                <p>{user.description}</p>
                                <small class="text-secondary"><Translate string={'followedBy'}/> <a href="#" class="text-decoration-none font-weight-bold text-secondary">Toni</a>, <a href="#" class="text-decoration-none font-weight-bold text-secondary">Reina isabel</a>, <a href="#" class="text-decoration-none font-weight-bold text-secondary">Bernat</a> + 16 <Translate string={'more'}/></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-block d-md-none">
                    <div class="col">
                        <div class="mx-0 mx-sm-5 row mt-3">
                            <div class="col text-center"><b>{user.publications}</b><br/> <small class="text-secondary"><b><Translate string={'posts'}/></b></small></div>
                            <div class="col text-center"><b class="ml-md-3">{user.follows_num}</b><br/> <small class="text-secondary"><b><Translate string={'followers'}/></b></small></div>
                            <div class="col text-center"><b class="ml-md-3">{user.followers_num}</b><br/> <small class="text-secondary"><b><Translate string={'following'}/></b></small></div>
                        </div>
                        <div class="mx-0 mx-sm-5 row mt-4">
                            <div class="col">
                                <p>{user.description}</p>
                                <small class="text-secondary"><Translate string={'followedBy'}/> <a href="#" class="text-decoration-none font-weight-bold text-secondary">Toni</a>, <a href="#" class="text-decoration-none font-weight-bold text-secondary">Reina isabel</a> + 17 <Translate string={'more'}/></small>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Perfil;