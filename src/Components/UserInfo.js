import React, { Component } from 'react';

/* Below list the user detail */

class UserInfo extends Component {
    render() {
        return (
            <div className="UserInfo">
                <h2>User Details</h2>
                <ul>
                    <li><strong>Name: </strong>{ this.props.location.state.name }</li> <!-- this show the name -->
                    <li><strong>Group: </strong>{ this.props.location.state.group }</li> <!-- this show the group -->
                    <li><strong>Age: </strong>{ this.props.location.state.age }</li> <!-- this show the age -->
                    <li><strong>Gender: </strong>{ this.props.location.state.gender }</li> <!-- this show the gender -->
                </ul>
            </div>
        );
    }
}

export default UserInfo;
