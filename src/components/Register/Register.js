import React, { Component } from "react";
import Translate from "../../lang/Translate";
import '../../css/register.css';
import md5 from "md5";
import axios from "axios";
import {forEach} from "react-bootstrap/esm/ElementChildren";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            userNameError: '',
            name: '',
            nameError: '',
            surname: '',
            surNameError: '',
            email: '',
            emailError: '',
            pass1: '',
            pass1Error: '',
            pass2: '',
            pass2Error: ''
        };

        this.userNameChange = this.userNameChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.surNameChange = this.surNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.secondPassChange = this.secondPassChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.userNameCheck = this.userNameCheck.bind(this);
    }

    userNameChange(event){
        this.setState({userName: event.target.value});
        this.userNameCheck(event.target.value);
    }

    userNameCheck(userName){
        let err = (userName.length < 5) ? 'mes de 5 caracters' : '';
        this.setState({userNameError: err});
        return err !== '';
    }

    nameChange(event){
        this.setState({name: event.target.value});
        this.nameCheck(event.target.value)
    }

    nameCheck(name){
        let err = (name.length <= 0) ? 'camp Obligatiori' : '';
        this.setState({nameError: err});
        return err !== '';
    }

    surNameChange(event){
        this.setState({surname: event.target.value});
        this.surNameCheck(event.target.value);
    }

    surNameCheck(surname){
        let err = (surname.length <= 0) ? 'camp Obligatiori' : '';
        this.setState({surNameError: err});
        return err !== '';
    }

    emailChange(event){
        this.setState({email: event.target.value});
        this.emailCheck(event.target.value);

    }

    emailCheck(email){
        let err = (this.validateEmail(email)) ? '' : 'email format incorrecta';
        this.setState({emailError: err});
        return err !== '';
    }

    passChange(event){
        this.setState({pass1: event.target.value});
        this.passCheck(event.target.value)
    }

    passCheck(pass1){
        let err = (pass1.length <  8) ? 'mes de 8 caracters' : '';
        this.setState({pass1Error: err});
        return err !== '';    }

    secondPassChange(event){
        this.setState({pass2: event.target.value});
        this.secondPassCheck(event.target.value)
    }

    secondPassCheck(pass2){
        let err = (pass2 !==  this.state.pass1) ? 'no coincideix' : '';
        this.setState({pass2Error: err});
        return err !== '';    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    submitRegister() {

        if (this.valideForm()) {
            const querystring = require('querystring');
            const uName = this.state.userName;
            const name = this.state.name;
            const sur1 = this.state.surname;
            const pass = md5(this.state.pass1);
            const email = this.state.email;

            axios.post(`http://localhost:80/api/user`, querystring.stringify({uName, name, sur1, pass, email}))
                .then(res => {
                    console.log(res.data);
                })
        } else {
            console.log('error');
        }

    }

    valideForm(){
        let comp = [];

        comp[0] = this.userNameCheck(this.state.userName);
        comp[1] = this.nameCheck(this.state.name);
        comp[2] = this.surNameCheck(this.state.surname);
        comp[3] = this.emailCheck(this.state.email);
        comp[4] = this.secondPassCheck(this.state.pass2);
        comp[5] = this.passCheck(this.state.pass1);

        for (let i = 0; i < comp.length ; i++) {
            if(comp[i])
                return false;
        }

        return true;
    }

    render() {
        return (
            <main className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="card shadow-sm mt-5 register">
                        <h5 className="card-header"><i className="far fa-id-card"/> <Translate string={'register'}/></h5>
                        <div className="card-body">
                            <form>
                                <div className="form-row form-group">
                                    <div className="col-12 col-sm-6">
                                        <label><i className="fas fa-user text-secondary"/> <Translate string={'user'}/>:</label>
                                        <input className="form-control" type="text" id="userName" value={this.state.userName} onChange={this.userNameChange}/>
                                        <small className="form-text text-danger">{this.state.userNameError}</small>
                                    </div>
                                    <div className="col-12 mt-3 col-sm-6 mt-sm-0">
                                        <label><i className="fas fa-user text-secondary"/> <Translate string={'name'}/>:</label>
                                        <input className="form-control" type="text" id="name" value={this.state.name} onChange={this.nameChange}/>
                                        <small className="form-text text-danger">{this.state.nameError}</small>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label><i className="fas fa-key text-secondary"/> <Translate string={'surnames'}/>:</label>
                                    <input className="form-control" type="text" id="surname" value={this.state.surname} onChange={this.surNameChange}/>
                                    <small className="form-text text-danger">{this.state.surNameError}</small>
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
                                        <small className="form-text text-danger">{this.state.pass1Error}</small>
                                    </div>
                                    <div className="col-12 mt-3 col-sm-6 mt-sm-0">
                                        <label><i className="fas fa-key text-secondary"/> <Translate string={'repeatPassword'}/>:</label>
                                        <input className="form-control" type="password" id="pass2" value={this.state.pass2} onChange={this.secondPassChange}/>
                                        <small className="form-text text-danger">{this.state.pass2Error}</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block rounded mt-4" type="button" onClick={this.submitRegister}><Translate string={'submit'}/> &nbsp;&nbsp;<i className="fas fa-angle-right"></i></button>
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