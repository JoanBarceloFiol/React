import React, { Component } from "react";
import Translate from "../../lang/Translate";
import SocialPerfil from "./SocialPerfil";
import SocialPublication from "./SocialPublication";
import SocialSuggestions from "./SocialSuggestions";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";

class Social extends Component {
    render() {

        if(localStorage.getItem('myData') !== null && localStorage.getItem('myData').split(',').length <= 1) {
            return <Redirect to='/login'/>;
        }

        return (
            <main role="main" class="container-fluid">
                <div class="mt-4 px-1 px-md-3 d-block d-md-none storyrow overflow-auto">
                    <div class="userstory d-block-inline">
                        <div class="d-flex justify-content-center">
                            <Link to="#">
                                <img title="#" class="mb-0 mr-3 rounded-circle shadow-sm storyborder" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" width="60px"/>
                            </Link>
                        </div>
                        <div class="d-flex justify-content-center">
                            <Link to="#" title="#" class="m-0 small text-decoration-none text-dark"><Translate string={'user'}/></Link>
                        </div>
                    </div>
                    <div class="userstory d-block-inline">
                        <div class="d-flex justify-content-center">
                            <Link to="#">
                                <img title="Toni" class="mb-0 mr-3 rounded-circle shadow-sm storyborder-seen" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" width="60px"/>
                            </Link>
                        </div>
                        <div class="d-flex justify-content-center">
                            <Link to="#" title="Toni" class="m-0 small text-decoration-none text-dark">Toni</Link>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 px-1 px-md-3">
                    <div class="col-lg-9 col-md-8 mt-n2 mt-md-2 mx-2 mb-3 mb-md-0">
                        <Link to="#" class="text-primary h5 d-none d-md-block"><i class="fas fa-plus-circle"></i><Translate string={'newStory'}/></Link>
                        <Link to="#" class="text-primary d-block d-md-none"><i class="fas fa-plus-circle"></i><Translate string={'newStory'}/></Link>
                        <hr class="d-block d-md-none"/>
                    </div>

                    <div class="col-md d-flex flex-md-row-reverse">

                        <div class="input-group mb-3 mb-md-0 pl-0">
                            <div class="input-group mb-3 my-0">
                                <input id="findUsers" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2"/>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-primary" type="button"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container-fluid gedf-wrapper mt-3">
                    <div class="row">
                        <SocialPerfil/>
                        <SocialPublication />
                        <SocialSuggestions />
                    </div>
                </div>
            </main>
        );
    }
}

export default Social;