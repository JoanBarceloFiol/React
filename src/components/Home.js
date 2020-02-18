import React, { Component } from "react";
import Translate from "../lang/Translate";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="videobackground">
                        <div className="overlay"/>
                        <video playsinline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                            <source src="http://www.goatrails.dawman.info/img/video.mp4" type="video/mp4"/>
                        </video>
                        <div className="container h-100">
                            <div className="d-flex h-100 text-center align-items-center">
                                <div className="w-100 text-white">
                                    <h1 className="display-4"><Translate string={'welcome'}/></h1>
                                    <p className="lead mb-0"><Translate string={'keyline'}/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;