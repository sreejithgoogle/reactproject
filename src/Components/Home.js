import React, { Component } from 'react';
import uuid from 'uuid';            /* This help to generate id */
import Adddata from './Adddata';    /* This help to import Adddata component */
import ListData from './ListData';  /* This help to import listdata component */

class Home extends Component {
    constructor(){
        super();               /* for every react component you create. However, if there is a constructor in your code, then you MUST call super */
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

    /* In componentWillMount we set some initial values, this values will load automaticaly when the project run.
    uuid will automatically create value for id. name, group, age, gender values given in the object
    */

    handleAddProject(project){
        let projects = this.state.projects;   /* store values of this.state.projects into projects */
        projects.push(project);               /* project values push(insert) into projects */
        this.setState({projects:projects});   /* projects updated values set into this.setState */
    }

    /* handleAddProject function uses for add values into projects */

    handleDeleteProject(id){
        let projects = this.state.projects;                     /* store values of this.state.projects into projects */
        let index = projects.findIndex(x => x.id === id);       /* find the id value from projects */
        projects.splice(index, 1);                              /* Remove the value */
        this.setState({projects:projects});                     /* Reset the values in project */
    }

    /* handleDeleteProject function uses for delete a row values */

    render() {
        return (
            <div className="Home">
                    <Adddata addProject={this.handleAddProject.bind(this)}/>  /* This shows the Adddata component */
                    <ListData projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />  /* This shows the listdata component */
            </div>
        );
    }

    /* render show the result */
}

export default Home;
