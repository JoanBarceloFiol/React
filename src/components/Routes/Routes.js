import React, { Component } from "react";
import RoutesMap from "./RoutesMap";
import RouteElement from "./RouteElement";
import axios from 'axios';
import DropdownButton from "react-bootstrap/DropdownButton";

class Routes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            routes: [],
            lvl: [],
            selectedLvl: []
        };

        this.setRoutesByText = this.setRoutesByText.bind(this);
        this.displayLvl = this.displayLvl.bind(this);
        this.modifyLvl = this.modifyLvl.bind(this);
        this.mountRoutes = this.mountRoutes.bind(this);
        this.checkLvl = this.checkLvl.bind(this);
    }

    componentDidMount() {
        this.setRoutes();

        let data = axios.get('http://localhost:80/api/level');
        data.then( res => {
            const lvl = res.data;
            this.setState({lvl});
        });
    }

    setRoutes(){
        let data = axios.get('http://localhost:80/api/routes/basic');
        data.then( res => {
            const routes = res.data;
            this.setState({routes});
        });
    }

    setRoutesByText(event){
        const text = event.target.value;

        if(text !== '') {
            let data = axios.get(`http://localhost:80/api/routes/text?text=${text}`);
            data.then(res => {
                const routes = res.data;
                this.setState({routes});
            });
        }else
            this.setRoutes();
    }

    mountRoutes(id, tit, dist, diff, maxPer, dur, desc, owner) {

        if (this.state.selectedLvl.length > 0) {
            if (this.checkLvl(diff))
                return (
                    <RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur}/>);
        } else {
            return (<RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur}/>);
        }

    }

    displayLvl(name){
        return (
            <li>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value={name} onClick={this.modifyLvl}/> {name}
                    </label>
                </div>
            </li>
        )
    }

    modifyLvl(event){
        let lvl = event.target.value;
        if(this.state.selectedLvl.includes(lvl)){
            let index = this.state.selectedLvl.indexOf(lvl);
            if (index > -1) {
                this.state.selectedLvl.splice(index, 1);
            }
        }else
            this.state.selectedLvl.push(lvl);

        this.setState({routes: this.state.routes});
        console.log(this.state.selectedLvl);
    }

    checkLvl(lvl){
        let lvlArray = this.state.selectedLvl;

        for (let i = 0; i < lvlArray.length ; i++) {
            if(lvl === lvlArray[i])
                return true;
        }

        return false;
    }

    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-12 col-md-6 overflow-hidden" >
                        <div className="row" >
                            <div className="col mx-3 mx-md-5 mt-4">
                                <div className="input-group mb-3 mb-md-0 pl-0">
                                    <div className="input-group mb-3 my-0">
                                        <input onChange={this.setRoutesByText} type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="basic-addon2"/>
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
                                    <div className="btn-group">
                                        <DropdownButton className="mx-2" id="dropdown-basic-button" title="zone">
                                                <li>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/>Two
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" />Two
                                                        </label>
                                                    </div>
                                                </li>
                                        </DropdownButton>
                                        <DropdownButton id="dropdown-basic-button " title="difucltat">
                                            {this.state.lvl.map(res => this.displayLvl(res.nom))}
                                        </DropdownButton>
                                    </div>
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