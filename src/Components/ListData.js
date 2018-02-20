import React, { Component } from 'react';
import ListItem from './ListItem';

class ListData extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
        let listItems;
        if(this.props.projects){
            listItems = this.props.projects.map(project => {
                //console.log(project);
                return(
                    <ListItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
                );
            });
        }

        return (
            <div className="ListData">
                <h3>List Data</h3>
                {listItems}
            </div>
        );
    }
}

export default ListData;
