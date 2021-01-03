import PropTypes from "prop-types";
import React, { Component } from 'react';

/**
* @extends {React.Component<{checkUserNameExist:Function.isRequired}>}
*/
class AddUserComponent extends Component {
    state = {
        firstName : '',
        lastName : '',
        userName : '',
        numberOfPlayedGames : 0
    };

    checkFilledInputs = () => {
        return (this.state.firstName === '') || (this.state.lastName === '') || (this.state.userName === '') || this.props.checkUserNameExist(this.state.userName);
    }

    submitForm = event => {
        event.preventDefault();
        this.props.handleSubmitForm(
            this.state.firstName,
            this.state.lastName,
            this.state.userName,
            this.state.numberOfPlayedGames
        );
        this.handleFirstNameChange('');
        this.handleLastNameChange('');
        this.handleUserNameChange('');
    }

    handleFirstNameChange = val => {
        this.setState({
            firstName : val
        });
    }

    handleLastNameChange = val => {
        this.setState({
            lastName : val
        });
    }
    
    handleUserNameChange = val => {
        this.setState({
            userName : val
        });
    }

    render() {
        return (
        <div>
            <form onSubmit={this.submitForm}>
                <input type="text" value={this.state.firstName} placeholder="First Name" onChange={(event) => this.handleFirstNameChange(event.target.value)}/>
                <input type="text" value={this.state.lastName} placeholder="Last Name" onChange={(event) => this.handleLastNameChange(event.target.value)}/>
                <input type="text" value={this.state.userName} placeholder="User Name" onChange={(event) => this.handleUserNameChange(event.target.value)}/>
                <button disabled={this.checkFilledInputs()}> Add </button>
            </form>
            {this.props.checkUserNameExist(this.state.userName) ? (
                <p>User name exist. Please change username</p>
            ) : ''}
        </div>
        );
    }
}

AddUserComponent.propTypes = {
  checkUserNameExist: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired
}

export default AddUserComponent;
