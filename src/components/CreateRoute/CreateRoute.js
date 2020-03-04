import React, { Component } from "react";
import Translate from "../../lang/Translate";
import '../../css/createRoute.css';
import CreateRouteTabs from "./CreateRouteTabs";

class CreateRoute extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <main className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="card shadow-sm mt-5 createRoute">
                        <h5 className="card-header"><i className="fas fa-route"/> <Translate string="createRoute"/> </h5>
                        <div className="card-body">
                            <form>
                                <CreateRouteTabs tab={this.state.activeTab} onTabChange={this.toggle}/>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default CreateRoute;