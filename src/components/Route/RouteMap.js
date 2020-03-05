import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON} from 'react-leaflet';
import axios from 'axios';
import '../../css/RouteMap.css';


class RouteMap extends Component {


    constructor(props) {
        super(props);

        this.state = {
            route: [],
            state: false
        };

        this.getGeoJson = this.getGeoJson.bind(this);
    }

    componentDidMount(){
        let data = axios.get(`http://www.goatrails.dawman.info/api/route/${this.props.id}/path`);
        data.then( res => {
            const route = res.data;
            this.setState({route, state: true});
        });
    }

    getGeoJson() {
        if (this.state.state)
            return ( <GeoJSON data={this.state.route} />);
    }


    render() {
        const position = [this.props.lat, this.props.lng];

        return (
            <Map center={position} zoom={this.props.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.getGeoJson()}
            </Map>
        );
    }

}

export default RouteMap;