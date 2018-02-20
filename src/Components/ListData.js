import React, { Component } from 'react';
import ListItem from './ListItem';   /* This help to import ListItem component */

class ListData extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

    /* deleteProject function to pass that id to onDelete that call in Home.js */

    render() {
        let listItems;
        if(this.props.projects){
            listItems = this.props.projects.map(project => {
                return(
                    <ListItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
                );
            });
        }

        return (
            <div className="ListData">
                <h3>List Data</h3>
                {listItems}    <!-- Listing the values -->
            </div>
        );
    }
}

export default ListData;
