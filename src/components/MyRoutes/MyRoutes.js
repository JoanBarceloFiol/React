import React, { Component } from "react";
import axios from "axios";
import classnames from 'classnames';
import RouteElement from "../Routes/RouteElement";
import Translate from "../../lang/Translate";
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";

class MyRoutes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            routes: [],
            activeTab: '2'
        };

        this.mountRoutes = this.mountRoutes.bind(this);
    }

    componentDidMount() {
        let id = localStorage.getItem('myData').split(',')[0];
        let data = axios.get(`http://www.goatrails.dawman.info/api/routes/basic/user/${id}`);
        data.then( res => {
            const routes = res.data;
            this.setState({routes});
        });
    }

    mountRoutes(id, tit, dist, diff, maxPer, dur, desc, owner, mod, zone) {
        return (<RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur} mod={mod} zone={zone}/>);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <main role="main" className="container-fluid">
                <div className="row mx-2 mx-sm-5 pt-4 mt-4">
                    <div className="col">
                        <hr/>
                        <Nav id="perfilTabs" className="row" tag="div">
                            <NavItem className="col border-0 p-0 mr-1 mr-sm-3 nav-item nav-link cursor-pointer text-center">
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => {this.toggle('1')}}
                                >
                                    <i className="fas fa-th d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-pencil-alt"></i> <Translate string={'signedUp'}/></span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="col border-0 p-0 mx-1 mx-sm-3 nav-item nav-link cursor-pointer text-center">
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => {this.toggle('2')}}
                                >
                                    <i className="fas fa-comments d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-edit"></i> <Translate string={'created'}/></span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="col border-0 p-0 ml-1 ml-sm-3 nav-item nav-link cursor-pointer text-center">
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => {this.toggle('3')}}
                                >
                                    <i className="fas fa-award d-inline d-md-none h4"></i><span className="d-none d-md-inline"><i className="fas fa-heart"></i> <Translate string={'favorites'}/></span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <hr/>
                    </div>
                </div>
                <div className="row mx-2 mx-sm-5">
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
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <h2><Translate string={'signedUp'}/></h2>
                            </TabPane>
                            <TabPane tabId="2">
                                {this.state.routes.map(res => this.mountRoutes
                                (res.id, res.titol, res.distancia, res.id_dificultat, res.duracio, res.maxim_persones,
                                    res.descripcio, res.owner, res.modalitat, res.zone))}
                            </TabPane>
                            <TabPane tabId="3">
                                <h2><Translate string={'favorites'}/></h2>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </main>
        );
    }
}

export default MyRoutes;