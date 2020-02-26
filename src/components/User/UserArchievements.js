import React, { Component } from "react";
import Translate from "../../lang/Translate";
import axios from "axios";

class UserArchievements extends Component {

    render() {
        return (
            <div>
                <h2><Translate string={'achievements'}/></h2>
            </div>
        );
    }
}

export default UserArchievements;