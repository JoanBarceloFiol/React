import React, { Component } from "react";
import Translate from "../lang/Translate";
import '../css/register.css';

class Register extends Component {
    render() {
        return (
            <main className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="card shadow-sm mt-5 register">
                        <h5 className="card-header"><i className="far fa-id-card"></i> <Translate string={'register'}/></h5>
                        <div className="card-body">
                            <form>
                                <div className="form-row form-group">
                                    <div className="col-12 col-sm-6">
                                        <label><i className="fas fa-user text-secondary"></i> <Translate string={'user'}/>:</label>
                                        <input className="form-control" type="text" id="userName"/>
                                        <small id="incorrectUser" className="form-text text-danger"></small>
                                    </div>
                                    <div className="col-12 mt-3 col-sm-6 mt-sm-0">
                                        <label><i className="fas fa-user text-secondary"></i> <Translate string={'name'}/>:</label>
                                        <input className="form-control" type="text" id="name"/>
                                        <small id="incorrectUser" className="form-text text-danger"></small>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label><i className="fas fa-key text-secondary"></i> <Translate string={'surnames'}/>:</label>
                                    <input className="form-control" type="text" id="surname"/>
                                    <small id="incorrectPass2" className="form-text text-danger"></small>
                                </div>
                                <div className="form-group">
                                    <label><i className="fas fa-key text-secondary"></i> <Translate string={'mail'}/>:</label>
                                    <input className="form-control" type="text" id="email"/>
                                    <small id="incorrectPass2" className="form-text text-danger"></small>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-12 col-sm-6">
                                        <label><i className="fas fa-key text-secondary"></i> <Translate string={'password'}/>:</label>
                                        <input className="form-control" type="password" id="pass"/>
                                        <small id="incorrectPass" className="form-text text-danger"></small>
                                    </div>
                                    <div className="col-12 mt-3 col-sm-6 mt-sm-0">
                                        <label><i className="fas fa-key text-secondary"></i> <Translate string={'repeatPassword'}/>:</label>
                                        <input className="form-control" type="password" id="pass2"/>
                                        <small id="incorrectPass2" className="form-text text-danger"></small>
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