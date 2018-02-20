import React, { Component } from 'react';
import uuid from 'uuid';
import Adddata from './Adddata';
import ListData from './ListData';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount(){
        this.setState({projects: [
            {
                id:uuid.v4(),
                name: 'Test Name',
                group: 'Group1',
                age: '20',
                gender: 'male'
            },
            {
                id:uuid.v4(),
                name: 'Test Name1',
                group: 'Group2',
                age: '21',
                gender: 'female'
            },
            {
                id:uuid.v4(),
                name: 'Test Name2',
                group: 'Group3',
                age: '22',
                gender: 'male'
            }
        ]});
    }

    handleAddProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});
    }

    handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects:projects});
    }

    render() {
        return (
            <div className="Home">
                    <Adddata addProject={this.handleAddProject.bind(this)}/>
                    <ListData projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
            </div>
        );
    }
}

export default Home;
