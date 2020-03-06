import React, { Component } from "react";
import Translate from "../../lang/Translate";
import axios from "axios";
import {Link} from "react-router-dom";

class SocialPerfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName : '',
            description: '',
            followers: '',
            following:''
        }
    }

    componentDidMount() {
        let id = localStorage.getItem('myData').split(',')[1];
        let data = axios.get(`http://www.goatrails.dawman.info/api/user/${id}`);
        data.then( res => {
            console.log(res.data)
            this.setState({
                userName : res.data.userName,
                description: res.data.description,
                followers: res.data.followers_num,
                following: res.data.follows_num
            });
        });
    }

    render() {
        let username = localStorage.getItem('myData').split(',')[1];
        return (
            <div className="col-md-3 d-none d-lg-block">
                <div className="card">
                    <div className="card-body">
                        <Link to={`/user/${username}`} id="myUserLink">
                            <img id="myUserImg" className="d-flex mb-2 mr-3 rounded-circle shadow-sm storyborder"
                                 src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                 width="75px"/>
                        </Link>
                        <Link to={`/user/${username}`} id="myUserName" className="h5 text-dark text-decoration-none">{this.state.userName}</Link>
                        <div className="h7">
                            <p id="myUserDescription">{this.state.description}</p>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="h6 text-muted"><Translate string={'followers'}/></div>
                            <div className="h5"><p id="myFollowersNum">{this.state.followers}</p></div>
                        </li>
                        <li className="list-group-item">
                            <div className="h6 text-muted"><Translate string={'following'}/></div>
                            <div className="h5"><p id="myFollowingNum">{this.state.following}</p></div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SocialPerfil;