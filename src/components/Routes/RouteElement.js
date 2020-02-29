import React, { Component } from 'react';


class RouteElement extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let ownerLink = 'user/' + this.props.owner;
        let routeLink = 'route/' + this.props.id;
        return (
            <div className="container-fluid">
                <div className="row border-bottom mx-2 mx-lg-3 mb-4">
                    <div className="d-none d-md-block col-sm-4 col-md-3 col-lg-2 text-center">
                        <a href={ownerLink}
                           title={this.props.owner}>
                            <img className="rounded-circle shadow-sm nostoryborder w-100"
                                 src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
                        </a>
                        <p className="text-secondary mt-1">
                            <a href={ownerLink}
                               title={this.props.owner}
                               className="text-secondary text-decoration-none">{this.props.owner}</a>
                        </p>
                    </div>
                    <div className="col">
                        <h4 className="mb-0"><a className="text-old-primary" href={routeLink}>{this.props.tit}</a></h4>
                        <small>
                            <i className="fas fa-star text-warning"/>
                            <i className="fas fa-star text-warning"/>
                            <i className="fas fa-star text-warning"/>
                            <i className="fas fa-star text-warning"/>
                            <i className="fas fa-star text-secondary"/>
                        </small>
                        <div className="mb-2">
                            <div className="d-block d-md-none mb-n1">
                                <a className="text-decoration-none text-old-primary" href={ownerLink} title={this.props.owner}>
                                    <small><i className='fas fa-user'/></small>
                                    {this.props.owner}
                                </a>
                                <br />
                            </div>
                            <small className="text-dark">
                                <i className="fas fa-walking"/> <span
                                className="mr-2"> {this.props.dist}km &nbsp;</span>
                                <i className="fas fa-medal"/> <a className="mr-2 text-old-primary" href="#"> {this.props.diff} </a>
                                <i className="fas fa-map-marker-alt"/> <a className="mr-2 text-old-primary" href="#"> routeZone </a>
                                <i className="fas fa-map-marker-alt"/> <a className="mr-2 text-old-primary" href="#"> {this.props.mod} </a>
                            </small>
                        </div>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default RouteElement;