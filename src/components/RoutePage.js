import React, { Component } from 'react';
import RouteMap from "./RouteMap";
import axios from "axios";
import RoutesMap from "./RoutesMap";


class RoutePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            route: []
        }

    }

    componentDidMount () {
        const {handle} = this.props.match.params;
        let data = axios.get(`http://localhost:80/api/routes/basic/${handle}`);

        data.then( res => {
            const route = res.data;
            this.setState({route});
        });
    }

    render() {
        let route = this.state.route;
        let ownLink = '/user/' + route.owner;
        let payLink = '/pay/' + route.id;
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

                            <RouteMap lat="39.571359" lng="2.970117" zoom="5" />

                            <hr/>


                                <p>{route.descripcio}</p>


                                <hr/>

                                    <div className="d-block d-lg-none">
                                        <a href={payLink}
                                           className="btn btn-primary btn-block rounded shadow-sm my-4">
                                            <i class Name="far fa-credit-card"/> &nbsp;pay</a>

                                        <div className="card mt-3">
                                            <h5 className="card-header">information</h5>
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
                                                        <p><i className="fas fa-medal"></i> <a
                                                            className="text-old-primary"
                                                            href="#">{route.id_dificultat}</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mt-3">
                                            <h5 className="card-header">averageRating</h5>
                                            <div className="card-body">
                                                <div className="row px-3">
                                                    <div className="col">
                                                        <p className="h2">4.3 <small>/ 5 <span
                                                            className="text-muted h6 ml-2">votes</span>
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


                                        <div className="card mb-3">
                                            <h5 className="card-header">leaveAComment</h5>
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="3"/>
                                                    </div>
                                                    <a href="#" className="btn btn-primary rounded shadow-sm text-white">submit &nbsp;&nbsp;
                                                        <i className="fas fa-angle-right"/></a>
                                                </form>
                                            </div>
                                        </div>


                                        <div className="mb-4">
                                            <a href="perfil/userName">
                                                <img className="d-flex mr-3 rounded-circle shadow-sm nostoryborder"
                                                     src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                                     width="50px"/>
                                            </a>
                                            <div>
                                                <div className="row border-bottom mb-2 mt-1">
                                                    <div className="col-4">
                                                        <a href="perfil/userName"
                                                           className="mt-2 h5 text-dark text-decoration-none">Joan</a>
                                                    </div>
                                                    <div className="col text-right pr-2 mt-2">
                                                        <i className="fas fa-star text-warning"/>
                                                        <i className="fas fa-star text-warning"/>
                                                        <i className="fas fa-star text-warning"/>
                                                        <i className="fas fa-star text-warning"/>
                                                        <i className="fas fa-star text-secondary"/>
                                                    </div>
                                                </div>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                                Donec lacinia congue felis in faucibus.
                                                <div className="row mb-2 mt-1">
                                                    <div className="col-7 text-secondary">
                                                        <span>3d</span> <a href="#"
                                                                           className="ml-3 text-secondary text-decoration-none"><span
                                                        className="d-none d-sm-inline">reply</span><i className="far fa-paper-plane d-inline d-sm-none"/></a>
                                                    </div>
                                                    <div className="col text-secondary text-right">
                                                        142 <i className="far fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="media mt-4">
                                                    <a href="perfil/userName">
                                                        <img
                                                            className="d-flex mr-3 rounded-circle shadow-sm nostoryborder"
                                                            src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                                            width="50px"/>
                                                    </a>
                                                    <div>
                                                        <div className="row border-bottom mb-2 mx-1">
                                                            <div className="col-4">
                                                                <a href="perfil/userName"
                                                                   className="h5 text-dark text-decoration-none">Toni</a>
                                                            </div>
                                                        </div>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                                        nisi vulputate fringilla. Donec lacinia congue felis in
                                                        faucibus.
                                                        <div className="row mb-2 mt-1">
                                                            <div className="col-7 text-secondary">
                                                                <span>2d</span> <a href="#" className="ml-3 text-secondary text-decoration-none"><span
                                                                className="d-none d-sm-inline">reply</span>
                                                                <i className="far fa-paper-plane d-inline d-sm-none"/></a>
                                                            </div>
                                                            <div className="col text-secondary text-right">
                                                                23 <i className="far fa-heart"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="mb-4">
                                            <a href="perfil/userName">
                                                <img className="d-flex mr-3 rounded-circle shadow-sm nostoryborder"
                                                     src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                                     width="50px"/>
                                            </a>
                                            <div>
                                                <div className="row border-bottom mb-2 mt-1">
                                                    <div className="col-4">
                                                        <a href="perfil/userName"
                                                           className="mt-2 h5 text-dark text-decoration-none">Reina
                                                            isabel</a>
                                                    </div>
                                                    <div className="col text-right pr-2 mt-2">
                                                        <i className="fas fa-star text-warning"/>
                                                        <i className="fas fa-star text-warning"/>
                                                        <i className="fas fa-star text-warning"/>
                                                        <i className="fas fa-star text-warning"/>
                                                        <i className="fas fa-star text-warning"/>
                                                    </div>
                                                </div>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                                Donec lacinia congue felis in faucibus.
                                                <div className="row mb-2 mt-1">
                                                    <div className="col-7 text-secondary">
                                                        <span>6d</span> <a href="#" className="ml-3 text-secondary text-decoration-none"><span
                                                        className="d-none d-sm-inline">"reply"</span>
                                                        <i lassName="far fa-paper-plane d-inline d-sm-none"/></a>
                                                    </div>
                                                    <div className="col text-secondary text-right">
                                                        317 <i className="far fa-heart"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                    </div>


                    <div className="col d-none d-lg-inline">

                        <a href="pagament/id"
                           className="btn btn-primary btn-block rounded shadow-sm mt-4 d-none d-lg-block">
                            <i className="far fa-credit-card"/> &nbsp;pay</a>

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
                            <h5 className="card-header">information</h5>
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
                            <h5 className="card-header">averageRating</h5>
                            <div className="card-body">
                                <div className="row px-3">
                                    <div className="col">
                                        <p className="h2">4.3 <small>/ 5 <span className="text-muted h6 ml-2">3 votes</span>
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
                            <h5 className="card-header px-3">ratingBreakdown</h5>
                            <div className="row my-2 ml-2 mt-4">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">5 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '66%'}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    1
                                </div>
                            </div>
                            <div className="row my-2 ml-2">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">4 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    2
                                </div>
                            </div>
                            <div className="row my-2 ml-2">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">3 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    0
                                </div>
                            </div>
                            <div className="row my-2 ml-2">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">2 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    0
                                </div>
                            </div>
                            <div className="row my-2 ml-2">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">1 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    0
                                </div>
                            </div>
                            <div className="row my-2 ml-2 mb-4">
                                <div className="col-md-4 col-lg-4 col-xl-3 text-right">
                                    <div className="mt-n1">0 <i className="fas fa-star text-warning"/></div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-7 mx-n3">
                                    <div className="progress">
                                        <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <div className="col-2 mt-n1">
                                    0
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