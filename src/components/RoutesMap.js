import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON} from 'react-leaflet';
import axios from 'axios';
import './Mapa.css';


class RoutesMap extends Component {


    constructor(props) {
        super(props);

        this.state = {
            points: [],
            state: false
        };

        this.getGeoJson = this.getGeoJson.bind(this);
        this.createPoint = this.createPoint.bind(this);
        this.testPoint = this.testPoint.bind(this);
        this.asyncData = this.asyncData.bind(this);
    }

    componentDidMount(){
        let data = this.asyncData();
            data.then( res => {
                const points = res.data;
                this.setState({points, state: true});
            });
    }

    async asyncData() {
        // fetch data from a url endpoint
        const data = axios.get('http://localhost:80/api/get/first-point-route/all');
        return data;
    }

    getGeoJson() {
        let points = this.state.points.map(res => this.createPoint(res.x, res.y));
        let rempGeoJson = this.testPoint(points);
        let geoJsonPlant = {
            "type": "FeatureCollection",
            "features":[
                0
            ]

        };

        geoJsonPlant = JSON.stringify(geoJsonPlant);

        if (this.state.state)
            return ( <GeoJSON data={JSON.parse(geoJsonPlant.replace('0', rempGeoJson))} />);
    }


    createPoint(x, y){
        return {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    parseFloat(x),
                    parseFloat(y)
                ]
            }
        }
    }

    testPoint(array){
        let json = '';
        let com = ',';
        for ( let i = 0 ; i<array.length ; i++){
            com = (i+1 === array.length) ? '' : ',';

            json = json + JSON.stringify(array[i]) + com;
        }

        return json;
    }

    render() {
        const position = [this.props.lat, this.props.lng];
        this.componentDidMount();

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

export default RoutesMap;