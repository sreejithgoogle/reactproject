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

    render() {
        return (
                <li className="ListData">
                    <strong>{this.props.project.name}</strong>&nbsp;&nbsp;
                    <Link to={{ pathname:'/userinfo', state: {id: this.props.project.id, name: this.props.project.name, group: this.props.project.group, age: this.props.project.age, gender: this.props.project.gender } }}>View</Link>&nbsp;&nbsp;
                    <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
                </li>

        );
    }
}

export default ListItem;
