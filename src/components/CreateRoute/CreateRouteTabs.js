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

class CreateRouteTabs extends Component{
    constructor(props) {
        super(props);

    }

    render() {
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
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default CreateRouteTabs;