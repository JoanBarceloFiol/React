import React, { Component } from 'react';
import RouteMap from "./RouteMap";
import axios from "axios";
import Comment from "../Comment";
import Translate from "../../lang/Translate";
import CommentBox from "../CommentBox";

class RoutePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            route: [],
            comments: [],
            avg: [],
            routeAvailable: false
        };

        this.getMap = this.getMap.bind(this);
        this.reloadPage = this.reloadPage.bind(this);
    }

    componentDidMount () {
        const {handle} = this.props.match.params;
        let route = axios.get(`http://localhost:80/api/routes/basic/${handle}`);
        let comments = axios.get(`http://localhost:80/api/route/${handle}/comment`);
        let avg = axios.get(`http://localhost:80/api/routes/basic/${handle}/avg`);

        route.then( res => {
            const route = res.data;
            this.setState({route, routeAvailable: true});
        });

        comments.then( res => {
            const comments = res.data;
            this.setState({comments});
        });

        avg.then( res => {
            const avg = res.data;
            this.setState({avg});
        });
    }

    displayComments(id, userId,text){
        if(id !== undefined) {
            return (<Comment id={id} userId={userId} text={text}/>)
        }
    }

    getMap(){
        if(this.state.routeAvailable)
            return (<RouteMap lat="39.571359" lng="2.970117" zoom="5" id={this.state.route.id}/>)
    }

    reloadPage() {
        console.log('hola');
        const {handle} = this.props.match.params;
        let comments = axios.get(`http://localhost:80/api/route/${handle}/comment`);

        comments.then( res => {
            const comments = res.data;
            this.setState({comments});
        });

    }

    render() {
        let route = this.state.route;
        let ownLink = '/user/' + route.owner;
        let payLink = '/pay/' + route.id;
        let avg = parseFloat(this.state.avg[0]).toFixed(2);

        return (
            <main role="main" className="container-fluid">
                <div className="row mx-0 mx-sm-2 mx-md-5 px-0 px-sm-2 px-md-5 mt-4">


                    <div className="col-lg-8">


                        <h1 className="mt-4 d-block-inline">{route.titol}</h1>

                        <hr/>
                        <div className="d-block-inline d-lg-none mb-4">
                            <a href={ownLink}><img
                                className="rounded-circle nostoryborder" title={route.owner}
                                src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                width="25px" /></a> <a className="text-old-primary" title={route.owner} href={ownLink}>{route.owner} </a>
                        </div>

                        <div style={{height: '400px'}}>
                            {this.getMap()}
                        </div>
                        <hr/>


                        <p>{route.descripcio}</p>


                        <hr/>

                        <div className="d-block d-lg-none">
                            <a href={payLink}
                               className="btn btn-primary btn-block rounded shadow-sm my-4">
                                <i className="far fa-credit-card"/> &nbsp;<Translate string={'pay'}/></a>

                            <div className="card mt-3">
                                <h5 className="card-header"><Translate string={'information'}/></h5>
                                <div className="card-body">
                                    <div className="row px-3">
                                        <div className="col col-xl-6">
                                            <p><i className="fas fa-walking"/>
                                                {route.distancia} km</p>
                                            <p><i className="fas fa-map-marker-alt"/> <a
                                                className="text-old-primary"
                                                href="#"> getZone()</a></p>
                                            <div className="d-block d-xl-none">
                                                <p><i className="fas fa-medal"/> <a
                                                    className="text-old-primary"
                                                    href="#">{route.id_dificultat}</a></p>
                                            </div>
                                        </div>
                                        <div className="d-none d-xl-block col-6">
                                            <p><i className="fas fa-medal"/> <a
                                                className="text-old-primary"
                                                href="#">{route.id_dificultat}</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3">
                                <h5 className="card-header"><Translate string={'averageRating'}/></h5>
                                <div className="card-body">
                                    <div className="row px-3">
                                        <div className="col">
                                            <p className="h2">{avg} <small>/ 5 <span
                                                className="text-muted h6 ml-2"><Translate string={'votes'}/></span>
                                            </small></p>
                                            <i className="fas fa-star text-warning"/>
                                            <i className="fas fa-star text-warning"/>
                                            <i className="fas fa-star text-warning"/>
                                            <i className="fas fa-star text-warning"/>
                                            <i className="fas fa-star text-muted"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="d-block d-lg-none my-4"/>

                        <CommentBox id={route.id} callback={this.reloadPage.bind(this)}/>


                        {this.state.comments.map(res => this.displayComments
                        (res.id, res.userId, res.text))}


                    </div>


                    <div className="col d-none d-lg-inline">

                        <a href="pagament/id"
                           className="btn btn-primary btn-block rounded shadow-sm mt-4 d-none d-lg-block">
                            <i className="far fa-credit-card"/> &nbsp; <Translate string={'pay'}/> </a>

                        <div className="card rounded mt-5">
                            <div className="card-body">
                                <div className="text-center">
                                    <a href={ownLink}
                                       title="getUserNom()">
                                        <img className="rounded-circle shadow-sm nostoryborder"
                                             src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                             width="80px"/>
                                    </a>
                                    <p className="text-secondary mt-1">
                                        <a className="text-old-primary" href={ownLink}
                                           title={route.owner}>{route.owner}</a>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="card mt-3">
                            <h5 className="card-header"><Translate string={'information'}/></h5>
                            <div className="card-body">
                                <div className="row px-3">
                                    <div className="col col-xl-6">
                                        <p><i className="fas fa-walking"/> {route.distancia} km</p>
                                        <p><i className="fas fa-map-marker-alt"/> <a className="text-old-primary" href="#"> getZone</a>
                                        </p>
                                        <div className="d-block d-xl-none">
                                            <p><i className="fas fa-medal"/> <a className="text-old-primary" href="#">{route.id_dificultat}</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-none d-xl-block col-6">
                                        <p><i className="fas fa-medal"/> <a className="text-old-primary" href="#">{route.id_dificultat}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="card mt-3">
                            <h5 className="card-header"><Translate string={'averageRating'}/></h5>
                            <div className="card-body">
                                <div className="row px-3">
                                    <div className="col">
                                        <p className="h2">{avg} <small>/ 5 <span className="text-muted h6 ml-2">3 <Translate string={'votes'}/></span>
                                        </small></p>
                                        <i className="fas fa-star text-warning"/>
                                        <i className="fas fa-star text-warning"/>
                                        <i className="fas fa-star text-warning"/>
                                        <i className="fas fa-star text-warning"/>
                                        <i className="fas fa-star text-muted"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <h5 className="card-header px-3"><Translate string={'ratingBreakdown'}/></h5>
                            <div className="row my-2 ml-2 mt-4">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">5 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: this.state.avg[1] + '%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    {this.state.avg[7]}
                                </div>
                            </div>
                            <div className="row my-2 ml-2">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">4 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: this.state.avg[2] + '%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    {this.state.avg[8]}
                                </div>
                            </div>
                            <div className="row my-2 ml-2">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">3 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: this.state.avg[3] + '%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    {this.state.avg[9]}
                                </div>
                            </div>
                            <div className="row my-2 ml-2">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">2 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: this.state.avg[4] + '%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    {this.state.avg[10]}
                                </div>
                            </div>
                            <div className="row my-2 ml-2">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">1 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: this.state.avg[5] + '%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    {this.state.avg[11]}
                                </div>
                            </div>
                            <div className="row my-2 ml-2 mb-4">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">0 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{width: this.state.avg[6] + '%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    {this.state.avg[12]}
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </main>
        );
    }

}

export default RoutePage;