import React, { Component } from 'react';
import Translate from "../lang/Translate";


class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let linkUser = '/user/' + this.props.userName;

        return (
            <div className="mb-4">
                <a href={linkUser}>
                    <img className="d-flex mr-3 rounded-circle shadow-sm nostoryborder"
                         src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                         width="50px"/>
                </a>
                <div>
                    <div className="row border-bottom mb-2 mt-1">
                        <div className="col-4">
                            <a href={linkUser}
                               className="mt-2 h5 text-dark text-decoration-none">{this.props.userName}</a>
                        </div>
                    </div>
                    {this.props.text}
                    <div className="row mb-2 mt-1">
                        <div className="col-7 text-secondary">
                            <a href="#" className="ml-3 text-secondary text-decoration-none"><span><Translate string={'reply'}/></span>
                            <i className="far fa-paper-plane d-inline d-sm-none"/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Comment;