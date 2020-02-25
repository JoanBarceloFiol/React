import React, { Component } from "react";
import Translate from "../../lang/Translate";
import Publicar from "../Publicar.js";

class SocialPublication extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-8 col-lg-6 gedf-main">
            <Publicar/>

                <div id="publication">

                </div>

                <div className="card gedf-card my-4 d-block d-md-none">
                    <div className="card-body">
                        <h5 className="card-title"><Translate string={'suggestions'}/></h5>
                        <div className="row px-3 mt-3 mb-3">
                            <a href="#">
                                <img title="Reina isabel"
                                     className="d-flex mr-3 rounded-circle shadow-sm mt-2 nostoryborder"
                                     src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                     height="40px" width="40px"/>
                            </a>
                            <div className="ml-2">
                                <a href="#" title="Reina isabel"
                                   className="mt-n2 text-decoration-none font-weight-bold text-dark">Reina
                                    isabel </a><br/>
                                <button className="btn btn-light btn-sm"><small><Translate string={'follow'}/></small>
                                </button>
                            </div>
                        </div>
                        <a href="#" className="card-link text-old-primary"><Translate string={'seeMore'}/></a>
                    </div>
                </div>

            </div>
        );
    }
}

export default SocialPublication;