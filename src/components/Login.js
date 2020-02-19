import React, { Component } from "react";
import Translate from "../lang/Translate";

class Login extends Component {
    render() {
        return (
            <main className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="card shadow-sm mt-5">
                        <h5 className="card-header"><i className="fas fa-sign-in-alt"></i> <Translate string={'login'}/></h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label><i className="fas fa-user text-secondary"></i> <Translate string={'user'}/>:</label>
                                    <input className="form-control" type="text" id="name"/>
                                    <small id="incorrectUser" className="form-text text-danger"></small>
                                </div>
                                <div className="form-group">
                                    <label><i className="fas fa-key text-secondary"></i> <Translate string={'password'}/>:</label>
                                    <input className="form-control" type="password" id="pass"/>
                                    <small id="incorrectPass" className="form-text text-danger"></small>
                                </div>
                                <button className="btn btn-primary btn-block rounded mt-4 disabled" type="button" id="submit"><Translate string={'submit'}/>&nbsp;&nbsp;<i className="fas fa-angle-right"></i></button>
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