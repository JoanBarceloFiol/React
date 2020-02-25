import React, { Component } from "react";

class Courses extends Component {
    render() {
        return (
            <main role="main" className="container-fluid">
                <div className="row mx-2 mx-sm-5 pt-4 mt-4">
                    <div className="col-3 col-xl-2 mt-4 class border-right d-none d-md-block">
                        <div className="mb-3">
                            <p className="font-weight-bold border-bottom">Zona</p>
                            <div className="form-group">
                                <label htmlFor="selectpais">Pais:</label>
                                <select className="form-control" id="selectpais">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectregio">Regio:</label>
                                <select className="form-control" id="selectregio">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectciutat">Ciutat:</label>
                                <select className="form-control" id="selectciutat">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="font-weight-bold border-bottom">Dificultat</p>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Facil</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Intermig</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Avançat</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="font-weight-bold border-bottom">Hores</p>
                        </div>
                        <div className="mb-3">
                            <p className="font-weight-bold border-bottom">Data</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-0 mb-md-4">
                            <div className="col mx-3 mx-md-5 mt-4">
                                <div className="input-group mb-3 mb-md-0 pl-0">
                                    <div className="input-group mb-3 my-0">
                                        <input type="text" className="form-control" placeholder="Cercar"
                                               aria-label="Cercar" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-primary" type="button"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row border-bottom d-block mb-4 d-md-none">
                            <div className="col mx-md-5 mt-2">
                                <div>
                                    <i className="mt-1 float-left d-inline fas fa-angle-double-left text-secondary"></i>
                                    <div className="d-inline mx-2 text-secondary">Zona</div>
                                    <div className="d-inline mx-2 text-secondary">Dificultat</div>
                                    <div className="mx-2 text-secondary d-inline d-md-none d-lg-inline">Distancia</div>
                                    <i className="mt-1 d-inline float-right fas fa-angle-double-right text-secondary"></i>
                                </div>
                            </div>
                        </div>

                        <div id="curs">

                        </div>

                    </div>
                </div>
            </main>
        );
    }
}

export default Courses;