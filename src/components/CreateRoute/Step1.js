import React, { Component } from "react";
import Translate from "../../lang/Translate";

class Step1 extends Component {

    render() {
        return (
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
        );
    }
}

export default Step1;