import React, { Component } from "react";
import Translate from "../../lang/Translate";
import axios from "axios";

class UserComments extends Component {

    render() {
        return (
            <div>
                <h2><Translate string={'comments'}/></h2>
            </div>
        );
    }
}

export default UserComments;