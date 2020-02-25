import React, { Component } from "react";
import Translate from "../../lang/Translate";

class SocialSuggestions extends Component {
    render() {
        return (
            <div className="col-md-4 col-lg-3 d-none d-md-block">

                <div className="card gedf-card mb-4 order-0">
                    <div className="card-body">
                        <h5 className="card-title"><Translate string={'stories'}/></h5>
                        <div className="row px-3">
                            <a href="#">
                                <img title="" className="d-flex mr-3 rounded-circle shadow-sm mt-1 storyborder"
                                     src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                     height="40px" width="40px"/>
                            </a>
                            <div className="ml-2">
                                <a href="#" title=""
                                   className="m-0 font-weight-bold text-decoration-none text-dark"><Translate
                                    string={'user'}/></a><br/>
                                <small className="text-muted"> <i className="fa fa-clock-o"></i> 40 min</small>
                            </div>
                        </div>
                        <div className="row px-3 mt-3">
                            <a href="#">
                                <img title="Toni" className="d-flex mr-3 rounded-circle shadow-sm mt-1 storyborder-seen"
                                     src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                     height="40px" width="40px"/>
                            </a>
                            <div className="ml-2">
                                <a href="#" title="Toni"
                                   className="m-0 font-weight-bold text-decoration-none text-dark">Toni </a><br/>
                                <small className="text-muted"> <i className="fa fa-clock-o"></i> 1 h</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card gedf-card my-4">
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

export default SocialSuggestions;