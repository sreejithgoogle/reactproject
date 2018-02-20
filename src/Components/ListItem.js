import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class ListItem extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

    /* deleteProject function to pass that id to onDelete that call in Home.js */

    render() {
        return (
                <li className="ListData">
                    <strong>{this.props.project.name}</strong>&nbsp;&nbsp;
                    <Link to={{ pathname:'/userinfo', state: {id: this.props.project.id, name: this.props.project.name, group: this.props.project.group, age: this.props.project.age, gender: this.props.project.gender } }}>View</Link>&nbsp;&nbsp;
                    <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
                </li>

        );
    }

    /* In link through 5 values pass to userinfo. param1:id , param2:name, param3:group, param4:age, param5:gender */
    /* In delete link click pass id only */
}

export default ListItem;
