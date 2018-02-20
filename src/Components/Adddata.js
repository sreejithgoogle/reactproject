import React, { Component } from 'react';
import uuid from 'uuid';

class Adddata extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {},
            newProject:{}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        if(!fields["age"]){
            formIsValid = false;
            errors["age"] = "Cannot be empty";
        }

        if(typeof fields["age"] !== "undefined"){
            if(!fields["age"].match(/^[0-9]+$/)){
                formIsValid = false;
                errors["age"] = "Only Numbers";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    /* handleValidation use for the validate the values enter in the input field */

    static defaultProps = {
        groups: ['Group1', 'Group2', 'group3']
    }

    /* defaultProps load the drop down values */

    change(e){
        this.setState({
            test: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            this.setState({newProject:{
                id: uuid.v4(),
                name: this.refs.name.value,
                group: this.refs.group.value,
                age: this.refs.age.value,
                gender: this.refs.gender.value
            }}, function(){
                this.props.addProject(this.state.newProject);
            });
        }
    }

    /* when i click submit button values pass into handleSubmit, then pass these values to handleValidation after the validation success. values
        pass into addProject that linked to Home.js (handleAddProject) */

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        let groupOptions = this.props.groups.map(group => {
            return <option key={group} value={group}>{group}</option>
        });
        return (
            <div>
                <h3>Add Data</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Name</label><br />
                        <input type="text" ref="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} /><br />
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span> <!-- This show the error messages -->
                        <br />
                        <label>Group</label><br />
                        <select ref="group">
                            {groupOptions}
                        </select><br />
                        <label>Age</label><br />
                        <input type="text" ref="age" onChange={this.handleChange.bind(this, "age")} value={this.state.fields["age"]} /><br />
                        <span style={{color: "red"}}>{this.state.errors["age"]}</span><br /> <!-- This show the error messages -->
                        <input type="radio" name="gender" ref="gender" value="male" defaultChecked="defaultChecked" onChange={this.change.bind(this)} /><label>Male</label>
                        <input type="radio" name="gender" ref="gender" value="female" onChange={this.change.bind(this)} /><label>Female</label><br />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Adddata;
