import React, { Component } from 'react';
import Translate from "../lang/Translate";
import axios from "axios";


class Comment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            commentError: '',
            referenceId: this.props.id
        };

        this.submitComment = this.submitComment.bind(this);
        this.commentChange = this.commentChange.bind(this);
    }

    commentChange(event){
        this.setState({comment: event.target.value});
        this.commentCheck(event.target.value)
    }

    commentCheck(comment){
        let err = (comment.length <  1) ? 'no hi ha cap comentari' : '';
        this.setState({commentError: err});
        return err !== '';
    }

    submitComment(){

        if ( this.state.comment.length >  0 && this.props.id !== undefined) {
            const querystring = require('querystring');
            const userId = localStorage.getItem('myData')[0];
            const text = this.state.comment;
            axios.post(`http://www.goatrails.dawman.info/api/route/${this.props.id}/comment`, querystring.stringify({ userId, text }))
                .then(res => {
                    console.log(res.data);
                    this.props.callback();
                    this.setState({comment: ''});
                }).catch(function (error) {
                    console.log(error.response);
            })
        }

    }

    render() {

        return (
            <div className="card mb-3">
                <h5 className="card-header"><Translate string={'leaveAComment'}/></h5>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" rows="3" value={this.state.comment} onChange={this.commentChange}/>
                        </div>
                        <button onClick={this.submitComment} className="btn btn-primary rounded shadow-sm text-white" type='button'> <Translate string={'submit'}/> &nbsp;&nbsp;
                            <i className="fas fa-angle-right"/></button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Comment;