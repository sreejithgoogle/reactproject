import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div className="UserInfo">
                <h2>User Details</h2>
                <ul>
                    <li><strong>Name: </strong>{ this.props.location.state.name }</li>
                    <li><strong>Group: </strong>{ this.props.location.state.group }</li>
                    <li><strong>Age: </strong>{ this.props.location.state.age }</li>
                    <li><strong>Gender: </strong>{ this.props.location.state.gender }</li>
                </ul>
            </div>
        );
    }
}

export default UserInfo;
