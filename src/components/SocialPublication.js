import React, { Component } from "react";
import Translate from "../lang/Translate";
import { Tab, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class SocialPublication extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-8 col-lg-6 gedf-main">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <Translate string={'publication'}/>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Translate string={'images'}/>
                    </Tab>
                </Tabs>
                <div className="card gedf-card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab"
                                   aria-controls="posts" aria-selected="true"><Translate string={'publication'}/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="images-tab" data-toggle="tab" role="tab"
                                   aria-controls="images" aria-selected="false" href="#images"><Translate
                                    string={'images'}/></a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="posts" role="tabpanel"
                                 aria-labelledby="posts-tab">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="message"><Translate string={'share'}/></label>
                                    <textarea className="form-control" id="message" rows="3" placeholder={<Translate string={'whatAreYouThinking'}/>}></textarea>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                <div className="form-group">
                                    <div className="custom-file">
                                        <input type="file" className="form-control-file" id="customFile"/>
                                        <label className="custom-file-label" htmlFor="customFile"><Translate
                                            string={'uploadImage'}/></label>
                                    </div>
                                </div>
                                <div className="py-4"></div>
                            </div>
                        </div>
                        <div className="btn-toolbar justify-content-between">
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary"><Translate string={'share'}/></button>
                            </div>

                            <div className="btn-group">
                                <button id="btnGroupDrop1" type="button"
                                        className="btn btn-link dropdown-toggle text-decoration-none text-old-primary"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-globe"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#"><i className="fa fa-globe"></i><Translate
                                        string={'public'}/></a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-user-lock"></i><Translate
                                        string={'private'}/></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="publication">

                </div>

                <div className="card gedf-card my-4 d-block d-md-none">
                    <div className="card-body">
                        <h5 className="card-title"><Translate string={'suggestions'}/></h5>
                        <div className="row px-3 mt-3 mb-3">
                            <a href="#">
                                <img title="Reina isabel"
                                     className="d-flex mr-3 rounded-circle shadow-sm mt-2 nostoryborder"
                                     src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                     height="40px" width="40px"/>
                            </a>
                            <div className="ml-2">
                                <a href="#" title="Reina isabel"
                                   className="mt-n2 text-decoration-none font-weight-bold text-dark">Reina
                                    isabel </a><br/>
                                <button className="btn btn-light btn-sm"><small><Translate string={'follow'}/></small>
                                </button>
                            </div>
                        </div>
                        <a href="#" className="card-link text-old-primary"><Translate string={'seeMore'}/></a>
                    </div>
                </div>

            </div>
        );
    }
}

export default SocialPublication;