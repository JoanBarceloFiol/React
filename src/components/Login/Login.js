import React, { Component } from "react";
import Translate from "../../lang/Translate";
import axios from "axios";
import md5 from 'md5';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            pass: null
        };

        this.userNameChange = this.userNameChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    userNameChange(event){
        this.setState({userName: event.target.value});
    }

    passChange(event){
        this.setState({pass: event.target.value});
    }

    submitLogin(){
        if ( this.state.userName !== null && this.state.pass !== null) {
            const querystring = require('querystring');
            const userName = this.state.userName;
            const password = md5(this.state.pass);
            axios.post(`http://localhost:80/api/login`, querystring.stringify({ password, userName }))
                .then(res => {
                    localStorage.setItem('myData', res.data);
                })
        }

        console.log(localStorage.getItem('myData'));
    }

    render() {
        return (
            <main className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="card shadow-sm mt-5">
                        <h5 className="card-header"><i className="fas fa-sign-in-alt"/> <Translate string={'login'}/></h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label><i className="fas fa-user text-secondary"/> <Translate string={'user'}/>:</label>
                                    <input className="form-control" type="text" id="name" value={this.state.userName} onChange={this.userNameChange}/>
                                    <small id="incorrectUser" className="form-text text-danger"/>
                                </div>
                                <div className="form-group">
                                    <label><i className="fas fa-key text-secondary"/> <Translate string={'password'}/>:</label>
                                    <input className="form-control" type="password" id="pass" value={this.state.pass} onChange={this.passChange}/>
                                    <small id="incorrectPass" className="form-text text-danger"/>
                                </div>
                                <button className="btn btn-primary btn-block rounded mt-4" type="button" onClick={this.submitLogin}><Translate string={'submit'}/>&nbsp;&nbsp;<i className="fas fa-angle-right"/></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2">
                    <a href="/register"><Translate string={'noRegister'}/></a>
                </div>
            </main>
        );
    }
}

export default Login;