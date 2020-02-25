import React, { Component } from "react";
import Translate from "../../lang/Translate";

class SocialPerfil extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3 d-none d-lg-block">
                <div className="card">
                    <div className="card-body">
                        <a id="myUserLink">
                            <img id="myUserImg" className="d-flex mb-2 mr-3 rounded-circle shadow-sm storyborder"
                                 src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                 width="75px"/>
                        </a>
                        <a id="myUserName" className="h5 text-dark text-decoration-none">{this.props.name}</a>
                        <div className="h7">
                            <p id="myUserDescription">{this.props.description}</p>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="h6 text-muted"><Translate string={'followers'}/></div>
                            <div className="h5"><p id="myFollowersNum">{this.props.followers}</p></div>
                        </li>
                        <li className="list-group-item">
                            <div className="h6 text-muted"><Translate string={'following'}/></div>
                            <div className="h5"><p id="myFollowingNum">{this.props.following}</p></div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SocialPerfil;