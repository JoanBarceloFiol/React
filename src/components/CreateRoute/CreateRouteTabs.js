import React, {Component} from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import classnames from 'classnames';
import Translate from "../../lang/Translate";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateRouteTabs extends Component{
    constructor(props) {
        super(props);

        this.state = {
            img: [],
            name: '',
            selectedLvl: '',
            distance: '',
            selectedMod: [],
            desc: '',
            lvl: [],
            mod: [],
            zones: [],
            selectedZones: '',
            redirect: false
        };

        this.nameChange = this.nameChange.bind(this);
        this.distanceChange = this.distanceChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.modifyFiltre = this.modifyFiltre.bind(this);
        this.setFiltre = this.setFiltre.bind(this);
        this.valid = this.valid.bind(this);
        this.createRoute = this.createRoute.bind(this);
    }

    componentDidMount() {
        let data = axios.get('http://www.goatrails.dawman.info/api/level');
        data.then( res => {
            const lvl = res.data;
            this.setState({lvl});
        });

        data = axios.get('http://www.goatrails.dawman.info/api/modality');
        data.then( res => {
            const mod = res.data;
            this.setState({mod});
        });

        data = axios.get('http://www.goatrails.dawman.info/api/region');
        data.then( res => {
            const zones = res.data;
            this.setState({zones});
        });
    }

    nameChange(event){
        this.setState({name: event.target.value});
    }

    distanceChange(event){
        let distance = event.target.value;

        if(parseInt(distance) || distance === '')
            this.setState({distance: (distance === '') ? '' : parseInt(distance)});
    }

    descChange(event){
        this.setState({desc: event.target.value});
    }

    displayFiltre(name, parent, id){
        let cheked = false;

        if(parent === 'lvl')
            cheked = (this.state.selectedLvl === id);

        if(parent === 'zone')
            cheked = (this.state.selectedZones === id);

        if(parent === 'modality')
            cheked = (this.state.selectedMod.includes(id));



        return (
            <li>
                <div className="checkbox ml-3 small">
                    <label className="d-flex">
                        <input type="checkbox" className="mt-1 mr-1" value={id + ',' + parent} onClick={this.setFiltre} checked={cheked} /> <span>{name}</span>
                    </label>
                </div>
            </li>
        )
    }

    modifyFiltre(name){
        if (name === 'modality') {
            return this.state.selectedMod;
        } else {
            return name;
        }
    }


    setFiltre(event){
        let values = event.target.value.split(',');
        let value = values[0];
        let filter = values[1];

        if(filter === 'modality') {
            if (this.state.selectedMod.includes(value)) {
                let index = this.state.selectedMod.indexOf(value);
                if (index > -1) {
                    this.state.selectedMod.splice(index, 1);
                }
            } else {
                this.state.selectedMod.push(value);
            }

            this.setState({selectedMod:this.state.selectedMod})
        }

        if(filter === 'lvl') {
            this.setState({selectedLvl: value});
        }

        if(filter === 'zone')
            this.setState({selectedZones: value});

    }

    valid(){
        return (this.state.name !== '' && this.state.desc !== '' &&
            this.state.selectedLvl !== '' && this.state.selectedZones !== '' &&
            this.state.selectedMod.length > 0 && this.state.distance !== '');
    }

    createRoute(){
        if (this.valid()) {
            const querystring = require('querystring');
            const titol = this.state.name;
            const distancia = this.state.distance;
            const id_dificultat = this.state.selectedLvl;
            const duracio = 1;
            const maxim_persones = 1;
            const descripcio = this.state.desc;
            const zone = this.state.selectedZones;
            const id_propietari = localStorage.getItem('myData').split(',')[0];

            axios.post(`http://www.goatrails.dawman.info/api/routes/basic`, querystring.stringify({titol, distancia, id_dificultat, duracio, maxim_persones, descripcio, id_propietari, zone}))
                .then(res => {
                    for (let i = 0; i < this.state.selectedMod.length ; i++) {
                        let mod = this.state.selectedMod[i];
                        axios.post(`http://www.goatrails.dawman.info/api/routes/basic/${res.data}/mod`, querystring.stringify({mod})).then( res => {console.log(res.data)});
                    }

                    this.setState({redirect:true})
                });
        }
    }

    render() {

        console.log(this.state.selectedMod);
        console.log(this.state.selectedLvl);
        console.log(this.state.selectedZones);
        console.log(this.state.redirect);

        if(this.state.redirect){
            return <Redirect to='/routes' />;
        }

        return (
            <div>
                <Nav id="perfilTabs" className="d-flex justify-content-center border-0 mb-3" tag="div">
                    <NavItem className="border rounded-circle p-0 mr-1 mr-sm-3 nav-item nav-link cursor-pointer">
                        <NavLink
                            className={classnames({ active: this.props.tab === '1' })}
                            onClick={() => {this.props.onTabChange('1')}}
                        >
                            <span>1</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="border rounded-circle  p-0 mx-1 mx-sm-3 nav-item nav-link cursor-pointer">
                        <NavLink
                            className={classnames({ active: this.props.tab === '2' })}
                            onClick={() => {this.props.onTabChange('2')}}
                        >
                            <span>2</span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.props.tab}>
                    <TabPane tabId="1">
                        <div>
                            <div className="form-group">
                                <div className="form-group">
                                    <div className="custom-file">
                                        <input type="file" className="form-control-file" id="customFile"/>
                                        <label className="custom-file-label" htmlFor="customFile"><Translate
                                            string={'uploadImage'}/></label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row justify-content-sm-end mt-4">
                                <div className="col-6 col-sm-3">
                                    <button className="btn btn-secondary btn-block rounded" type="button" onClick={() => {this.props.onTabChange('2')}}><Translate string="next"/></button>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <button className="btn btn-dark btn-block rounded" type="button"><Translate string="cancel"/></button>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div>
                            <div className="form-group">
                                <label htmlFor="routeName"> <Translate string="name"/>:</label>
                                <input className="form-control" type="text" id="routeName" value={this.state.name} onChange={this.nameChange}/>
                            </div>
                            <div className="form-row form-group">
                                <div className="col-12 col-sm-3">
                                    <DropdownButton size="sm" className="mr-2 pt-1" variant="link text-decoration-none" title={(<Translate string="zone"/>)}>
                                        {this.state.zones.map(res => this.displayFiltre(res.name, 'zone', res.id))}
                                    </DropdownButton>
                                </div>
                                <div className="col-12 col-sm-3">
                                    <DropdownButton size="sm" className="mx-2 pt-1" variant="link text-decoration-none" title={(<Translate string="difficulty"/>)}>
                                        {this.state.lvl.map(res => this.displayFiltre(res.nom, 'lvl', res.id))}
                                    </DropdownButton>
                                </div>
                                <div className="col-12 col-sm-3">
                                    <DropdownButton size="sm" className="ml-2 pt-1" variant="link text-decoration-none" title={(<Translate string="modality"/>)}>
                                        {this.state.mod.map(res => this.displayFiltre(res.nom, 'modality', res.id))}
                                    </DropdownButton>
                                </div>
                                <div className="col-12 mt-3 col-sm-3 mt-sm-0">
                                    <label htmlFor="distance"> <Translate string="distance"/>:</label>
                                    <input className="form-control" type="text" id="distance" value={this.state.distance} onChange={this.distanceChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description"> <Translate string="description"/>:</label>
                                <textarea className="form-control" id="description" rows="4" value={this.state.desc} onChange={this.descChange}/>
                            </div>
                            <div className="form-row justify-content-sm-end mt-4">
                                <div className="col-6 col-sm-3">
                                    <button onClick={this.createRoute} className="btn btn-secondary btn-block rounded" type="button" disabled={!this.valid()}><Translate string="create"/></button>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <button className="btn btn-dark btn-block rounded" type="button"><Translate string="cancel"/></button>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default CreateRouteTabs;