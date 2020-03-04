import React, { Component } from "react";
import Translate from "../../lang/Translate";

class Step2 extends Component {

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="routeName"> <Translate string="name"/>:</label>
                    <input className="form-control" type="text" id="routeName"/>
                </div>
                <div className="form-row form-group">
                    <div className="col-12 col-sm-4">
                        <label htmlFor="level"> <Translate string="difficulty"/>:</label>
                        <input className="form-control" type="text" id="level"/>
                    </div>
                    <div className="col-12 mt-3 col-sm-4 mt-sm-0">
                        <label htmlFor="distance"> <Translate string="distance"/>:</label>
                        <input className="form-control" type="text" id="distance"/>
                    </div>
                    <div className="col-12 mt-3 col-sm-4 mt-sm-0">
                        <label htmlFor="modality"> <Translate string="modality"/>:</label>
                        <input className="form-control" type="text" id="modality"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description"> <Translate string="description"/>:</label>
                    <textarea className="form-control" id="description" rows="4"></textarea>
                </div>
                <div className="form-row justify-content-sm-end mt-4">
                    <div className="col-6 col-sm-3">
                        <button className="btn btn-secondary btn-block rounded" type="button"><Translate string="create"/></button>
                    </div>
                    <div className="col-6 col-sm-3">
                        <button className="btn btn-dark btn-block rounded" type="button"><Translate string="cancel"/></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step2;