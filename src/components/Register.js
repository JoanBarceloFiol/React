import React, { Component } from "react";
import Translate from "../lang/Translate";
import '../css/register.css';
import md5 from "md5";
import axios from "axios";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            userNameError: null,
            name: null,
            surname: null,
            email: null,
            emailError: null,
            pass1: null,
            pass2: null
        };

        this.userNameChange = this.userNameChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.surNameChange = this.surNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.secondPassChange = this.secondPassChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    userNameChange(event){
        this.setState({userName: event.target.value});
        let err = (event.target.value.length < 5) ? 'mes de 5 caracters' : null;
        this.setState({userNameError: err});
    }

    nameChange(event){
        this.setState({nameame: event.target.value});
    }

    surNameChange(event){
        this.setState({surname: event.target.value});
    }

    emailChange(event){
        this.setState({email: event.target.value});
        let err = (this.validateEmail(event.target.value)) ? null : 'email format incorrecta';
        this.setState({emailError: err});

    }

    passChange(event){
        this.setState({pass1: event.target.value});
    }

    secondPassChange(event){
        this.setState({pass2: event.target.value});
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    submitRegister(){
        if ( this.state.userName !== null && this.state.pass !== null) {
            const querystring = require('querystring');
            const userName = this.state.userName;
            const password = md5(this.state.pass);
            axios.post(`http://localhost:80/api/user`, querystring.stringify({ password, userName }))
                .then(res => {
                    console.log('succesful');;
                })
        }
    }

    render() {
        return (
            <main className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="card shadow-sm mt-5 register">
                        <h5 className="card-header"><i className="far fa-id-card"/> <Translate string={'register'}/></h5>
                        <div className="card-body">
                            <form onClick={this.submitRegister}>
                                <div className="form-row form-group">
                                    <div className="col-12 col-sm-6">
                                        <label><i className="fas fa-user text-secondary"/> <Translate string={'user'}/>:</label>
                                        <input className="form-control" type="text" id="userName" value={this.state.userName} onChange={this.userNameChange}/>
                                        <small className="form-text text-danger">{this.state.userNameError}</small>
                                    </div>
                                    <div className="col-12 mt-3 col-sm-6 mt-sm-0">
                                        <label><i className="fas fa-user text-secondary"/> <Translate string={'name'}/>:</label>
                                        <input className="form-control" type="text" id="name" value={this.state.name} onChange={this.nameChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label><i className="fas fa-key text-secondary"/> <Translate string={'surnames'}/>:</label>
                                    <input className="form-control" type="text" id="surname" value={this.state.surname} onChange={this.surNameChange}/>
                                </div>
                                <div className="form-group">
                                    <label><i className="fas fa-key text-secondary"/> <Translate string={'mail'}/>:</label>
                                    <input className="form-control" type="text" id="email" value={this.state.email} onChange={this.emailChange}/>
                                    <small className="form-text text-danger">{this.state.emailError}</small>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-12 col-sm-6">
                                        <label><i className="fas fa-key text-secondary"/> <Translate string={'password'}/>:</label>
                                        <input className="form-control" type="password" id="pass" value={this.state.pass1} onChange={this.passChange}/>
                                        <small id="incorrectPass" className="form-text text-danger"/>
                                    </div>
                                    <div className="col-12 mt-3 col-sm-6 mt-sm-0">
                                        <label><i className="fas fa-key text-secondary"/> <Translate string={'repeatPassword'}/>:</label>
                                        <input className="form-control" type="password" id="pass2" value={this.state.oass2} onChange={this.secondPassChange}/>
                                        <small id="incorrectPass2" className="form-text text-danger"/>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block rounded mt-4 disabled" type="button" id="submit"><Translate string={'submit'}/> &nbsp;&nbsp;<i className="fas fa-angle-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2">
                    <a href="/login"><Translate string={'alreadyRegister'}/>.</a>
                </div>
            </main>
        );
    }
}

export default Register;