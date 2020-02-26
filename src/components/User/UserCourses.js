import React, { Component } from "react";
import Translate from "../../lang/Translate";
import axios from "axios";

class UserCourses extends Component {

    render() {
        return (
            <div>
                <h2><Translate string={'courses'}/></h2>
            </div>
        );
    }
}

export default UserCourses;