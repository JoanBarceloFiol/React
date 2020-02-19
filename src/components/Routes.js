import React, { Component } from "react";
import RoutesMap from "./RoutesMap";
import RouteElement from "./RouteElement";
import axios from 'axios';

class Routes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            routes: []
        }
    }

    componentDidMount() {
        let data = axios.get('http://localhost:80/api/routes/basic');
        data.then( res => {
            const routes = res.data;
            this.setState({routes});
        });
    }

    mountRoutes(id, tit, dist, diff, maxPer, dur, desc, owner){
        console.log(desc);
        return (<RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur}/>)
    }

    render() {
        console.log(this.state.routes);

        return (
            <div>
                <div className="row">

                    <div className="col-12 col-md-6 overflow-hidden" >
                        <div className="row" >
                            <div className="col mx-3 mx-md-5 mt-4">
                                <div className="input-group mb-3 mb-md-0 pl-0">
                                    <div className="input-group mb-3 my-0">
                                        <input type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-primary" type="button"><i className="fa fa-search"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row border-bottom" >
                            <div className="col mx-3 mx-md-5 mt-2">
                                <div>
                                    <i className="mt-1 float-left d-inline fas fa-angle-double-left text-secondary"/>
                                    <div className="d-inline mx-2 text-secondary">zone</div>
                                    <div className="d-inline mx-2 text-secondary">difficulty</div>
                                    <div className="mx-2 text-secondary d-inline d-md-none d-lg-inline">distance</div>
                                    <i className="mt-1 d-inline float-right fas fa-angle-double-right text-secondary"/>
                                </div>
                            </div>
                        </div>

                        <div className="row overflow-auto">
                            <div className="col pt-2">
                                {this.state.routes.map(res => this.mountRoutes
                                (res.id, res.titol, res.distancia, res.id_dificultat, res.duracio, res.maxim_persones,
                                res.descripcio, res.owner))}
                            </div>
                        </div>

                    </div>

                    <div className="d-none d-md-block col-6 overflow-hidden p-0" style={{height: '600px'}}>
                        <RoutesMap lat="39.571359" lng="2.970117" zoom="5" />
                    </div>

                </div>
                <div className="row bg-light shadow-sm">
                    <div className="col text-center border"><p className="my-2"><i className="fas fa-route"/> routes</p></div>
                    <div className="col text-center border"><p className="my-2"><i className="fas fa-map-marked-alt"/> map</p></div>
                </div>
            </div>
        );
    }
}

export default Routes;