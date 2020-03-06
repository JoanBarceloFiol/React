import React, { Component } from 'react';
import Translate from "../lang/Translate";
import {Link} from "react-router-dom";


class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row mb-4">
                <div className="col-1">
                </div>
                <div className="col">
                    <div>
                        <div className="row border-bottom mb-2 mt-1 pb-2">
                            <div>
                                <Link to={`/user/${this.props.userId}`}>
                                    <img className="rounded-circle shadow-sm nostoryborder"
                                         src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                         width="50px"/>
                                </Link>
                            </div>
                            <div className="col-4 d-flex align-items-center">
                                <Link to={`/user/${this.props.userId}`}
                                   className="mt-2 h5 text-dark text-decoration-none">{this.props.userId}</Link>
                            </div>
                        </div>
                        {this.props.text}
                        <div className="row mb-2 mt-1">
                            <div className="col-7 text-secondary">
                                <Link to="#" className="ml-3 text-secondary text-decoration-none"><span className="d-none d-sm-inline-block"><Translate string={'reply'}/></span>
                                    <i className="far fa-paper-plane d-inline d-sm-none"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1">
                </div>
            </div>
        );
    }

}

export default Comment;