import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserComponent from './components/AddUserComponent';
import UserListComponent from './components/UserListComponent';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {

  state = {
    users : []
  }

  checkUserNameIsExist = (userName) => {
    if(this.state.users.filter(user => user.userName === userName).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  
  onAddUser = (firstName,lastName,userName,numberOfPlayedGames) => {
    const user = {
      firstName : firstName,
      lastName : lastName,
      userName : userName,
      numberOfPlayedGames : numberOfPlayedGames
    }
    this.setState((prevState) => ({
      users : [...prevState.users,user]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUserComponent checkUserNameExist={this.checkUserNameIsExist} handleSubmitForm={this.onAddUser}/>
        <UserListComponent users = {this.state.users}/>
      </div>
    );
  }
}

export default App;
