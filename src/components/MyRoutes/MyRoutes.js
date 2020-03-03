import React, { Component } from "react";
import axios from "axios";
import RouteElement from "../Routes/RouteElement";
import Translate from "../../lang/Translate";

class MyRoutes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            routes: [],

        };

        this.mountRoutes = this.mountRoutes.bind(this);
    }

    componentDidMount() {
        let id = localStorage.getItem('myData').split(',')[0];
        let data = axios.get(`http://localhost:80/api/routes/basic/user/${id}`);
        data.then( res => {
            const routes = res.data;
            this.setState({routes});
        });
    }

    mountRoutes(id, tit, dist, diff, maxPer, dur, desc, owner, mod, zone) {
        return (<RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur} mod={mod} zone={zone}/>);

    }

    render() {
        return (
            <main role="main" className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <h3 className="mt-5 text-secondary">
                        <i className='fas fa-map-marked-alt'/> <Translate string={'myRoute'}/></h3>
                </div>
                <div className="row mx-2 mx-sm-5 border rounded shadow-sm pt-4 mt-4">
                    {this.state.routes.map(res => this.mountRoutes
                    (res.id, res.titol, res.distancia, res.id_dificultat, res.duracio, res.maxim_persones,
                        res.descripcio, res.owner, res.modalitat, res.zone))}
                </div>
            </main>
        );
    }
}

export default MyRoutes;