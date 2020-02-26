import React, { Component } from "react";
import Translate from "../../lang/Translate";
import axios from "axios";

class UserRoutes extends Component {

    render() {
        return (
            <div>
                <h2><Translate string={'routes'}/></h2>
            </div>
        );
    }
}

export default UserRoutes;