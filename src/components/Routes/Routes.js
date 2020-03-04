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
            selectedMod: [],
            zones: [],
            selectedZones: [],
            minKm: '',
            maxKm: ''
        };

        this.setRoutesByText = this.setRoutesByText.bind(this);
        this.displayFiltre = this.displayFiltre.bind(this);
        this.setFiltre = this.setFiltre.bind(this);
        this.mountRoutes = this.mountRoutes.bind(this);
        this.checkBasicFiltre = this.checkBasicFiltre.bind(this);
        this.modifyFiltre = this.modifyFiltre.bind(this);
        this.checkMod = this.checkMod.bind(this);
        this.minChange = this.minChange.bind(this);
        this.maxChange = this.maxChange.bind(this);
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

        data = axios.get('http://localhost/api/region');
        data.then( res => {
            const zones = res.data;
            this.setState({zones});
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

    mountRoutes(id, tit, dist, diff, maxPer, dur, desc, owner, mod, zone) {

        if (this.state.selectedLvl.length > 0 || this.state.selectedMod.length > 0 || this.state.selectedZones.length > 0
            || this.state.minKm !== '' || this.state.maxKm !== '') {

            let lvlFlag = (this.state.selectedLvl.length > 0) ? this.checkBasicFiltre(diff, this.state.selectedLvl) : true;
            let zoneFlag = (this.state.selectedZones.length > 0) ? this.checkBasicFiltre(zone, this.state.selectedZones) : true;
            let modFlag = (this.state.selectedMod.length > 0) ? this.checkMod(mod) : true;
            let minFlag = (this.state.minKm === '' || parseInt(dist) >=  parseInt(this.state.minKm));
            let maxFlag = (this.state.maxKm === '' || parseInt(dist) <=  parseInt(this.state.maxKm));

            console.log(maxFlag);

            if (modFlag && lvlFlag && zoneFlag && maxFlag && minFlag)
                return (
                    <RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur} mod={mod} zone={zone}/>);

        } else {
            return (<RouteElement id={id} tit={tit} dist={dist} diff={diff} maxPer={maxPer} desc={desc} owner={owner} dur={dur} mod={mod} zone={zone}/>);
        }

    }

    displayFiltre(name, parent){

        return (
            <li>
                <div className="checkbox ml-2">
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
            case 'zone':
                this.selectedFiltre = this.state.selectedZones;
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

    checkBasicFiltre(val, array){
        for (let i = 0; i < array.length ; i++) {
            if(val === array[i])
                return true;
        }

        return false;
    }

    checkMod(mod){
        let modArray = this.state.selectedMod;
        mod = mod.split(',');

        for (let i = 0; i < modArray.length ; i++) {
            if(!mod.includes(modArray[i]))
                return false;
        }

        return true;
    }

    minChange(event){
        let min = event.target.value;

        if(parseInt(min) || min === '')
            this.setState({minKm: (min === '') ? '' : parseInt(min)});

    }

    maxChange(event){
        let max = event.target.value;

        if(parseInt(max) || max === '')
            this.setState({maxKm: (max === '') ? '' : parseInt(max)});
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
                        <div className="row justify-content-between border-bottom" >
                            <div className="col ml-3 ml-md-5 mt-2 mb-1 ">
                                <div className="btn-group">
                                    <DropdownButton size="sm" className="mr-2 pt-1" variant="link text-decoration-none" title="Zona">
                                        {this.state.zones.map(res => this.displayFiltre(res.name, 'zone'))}
                                    </DropdownButton>
                                    <DropdownButton size="sm" className="mx-2 pt-1" variant="link text-decoration-none" title="Difucltat">
                                        {this.state.lvl.map(res => this.displayFiltre(res.nom, 'lvl'))}
                                    </DropdownButton>
                                    <DropdownButton size="sm" className="ml-2 pt-1" variant="link text-decoration-none" title="Modalitat">
                                        {this.state.mod.map(res => this.displayFiltre(res.nom, 'modality'))}
                                    </DropdownButton>
                                </div>
                            </div>
                            <div className="col ml-4 ml-md-5 mr-4 mt-2 mb-1 mr-5">
                                <form className="d-flex">
                                            <p className="mt-2 ml-1 mr-2">KM:</p>
	                                        <div className="input-group input-group-sm mb-2 pt-1 mx-1">
	                                        	<input type="text" className="form-control" aria-label="Small" placeholder="Min" value={this.state.minKm} onChange={this.minChange} aria-describedby="inputGroup-sizing-sm"/>
	                                        </div>
                                          <div className="input-group input-group-sm mb-2 pt-1 ml-1">
	                                        <input type="text" className="form-control" aria-label="Small" placeholder="Max" value={this.state.maxKm} onChange={this.maxChange} aria-describedby="inputGroup-sizing-sm"/>
	                                      </div>
                                </form>
                            </div>
                        </div>

                        <div className="row overflow-auto">
                            <div className="col pt-2">
                                {this.state.routes.map(res => this.mountRoutes
                                (res.id, res.titol, res.distancia, res.id_dificultat, res.duracio, res.maxim_persones,
                                res.descripcio, res.owner, res.modalitat, res.zone))}
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