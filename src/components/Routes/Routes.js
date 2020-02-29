import React, { Component } from "react";
import RoutesMap from "./RoutesMap";
import RouteElement from "./RouteElement";
import axios from 'axios';
import DropdownButton from "react-bootstrap/DropdownButton";

class Routes extends Component {
    selectedFiltre = [];

    constructor(props) {
        super(props);

        this.state = {
            routes: [],
            lvl: [],
            selectedLvl: [],
            mod: [],
            selectedMod: []
        };

        this.setRoutesByText = this.setRoutesByText.bind(this);
        this.displayFiltre = this.displayFiltre.bind(this);
        this.setFiltre = this.setFiltre.bind(this);
        this.mountRoutes = this.mountRoutes.bind(this);
        this.checkLvl = this.checkLvl.bind(this);
        this.modifyFiltre = this.modifyFiltre.bind(this);
        this.checkMod = this.checkMod.bind(this);
    }

    componentDidMount() {
        this.setRoutes();

        let data = axios.get('http://localhost:80/api/level');
        data.then( res => {
            const lvl = res.data;
            this.setState({lvl});
        });

        data = axios.get('http://localhost/api/modality');
        data.then( res => {
            const mod = res.data;
            this.setState({mod});
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
            let data = axios.get(`http://localhost:80/api/routes/basic/text?text=${text}`);
            data.then(res => {
                const routes = res.data;
                this.setState({routes});
            });
        }else
            this.setRoutes();
    }

    mountRoutes(id, tit, dist, diff, maxPer, dur, desc, owner, mod) {

        if (this.state.selectedLvl.length > 0 || this.state.selectedMod.length > 0) {
            let lvlFlag = (this.state.selectedLvl.length > 0) ? this.checkLvl(diff) : true;
            let modFlag = (this.state.selectedMod.length > 0) ? this.checkMod(mod) : true;
            if (modFlag && lvlFlag)
                return (
                    <RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur}/>);
        } else {
            return (<RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur}/>);
        }

    }

    displayFiltre(name, parent){

        return (
            <li>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value={name + ',' + parent} onClick={this.setFiltre}/> {name}
                    </label>
                </div>
            </li>
        )
    }

    modifyFiltre(name){
        switch (name) {
            case 'modality':
                this.selectedFiltre = this.state.selectedMod;
                break;
            case 'lvl':
                this.selectedFiltre = this.state.selectedLvl;
                break;
        }
    }


    setFiltre(event){
        let values = event.target.value.split(',');
        let lvl = values[0];
        this.modifyFiltre(values[1]);

        if(this.selectedFiltre.includes(lvl)){
            let index = this.selectedFiltre.indexOf(lvl);
            if (index > -1) {
                this.selectedFiltre.splice(index, 1);
            }
        }else
            this.selectedFiltre.push(lvl);


        this.setState({routes: this.state.routes});
    }

    checkLvl(lvl){
        let lvlArray = this.state.selectedLvl;

        for (let i = 0; i < lvlArray.length ; i++) {
            if(lvl === lvlArray[i])
                return true;
        }

        return false;
    }

    checkMod(mod){
        let modArray = this.state.selectedMod;
        mod = mod.split(',');
        console.log(modArray);
        console.log(mod);
        for (let i = 0; i < modArray.length ; i++) {
            for (let j = 0; j < mod.length ; j++) {
                if(mod[j] === modArray[i])
                    return true;
            }
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
                                            {this.state.lvl.map(res => this.displayFiltre(res.nom, 'lvl'))}
                                        </DropdownButton>
                                        <DropdownButton id="dropdown-basic-button " title="Modalitat">
                                            {this.state.mod.map(res => this.displayFiltre(res.nom, 'modality'))}
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
                                res.descripcio, res.owner, res.modalitat))}
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