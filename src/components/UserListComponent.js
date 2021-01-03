import PropTypes from "prop-types";
import React, { Component } from 'react';

/**
* @extends {React.Component<{users:array.isRequired}>}
*/
class UserListComponent extends Component {
  state = {
    showPlayedGames : false
  }

  tooglePlayedGames = () => {
    this.setState((prevState) => ({
      showPlayedGames : !prevState.showPlayedGames
    }));
  }

  render() {
    return (
      <div>
        {this.props.users.length > 0 ? (
          <div>
            <h1>Users</h1>
            <button onClick = {this.tooglePlayedGames}> Show / Hide Users Played Games </button>
            <br></br>
            <ol>
              {this.props.users.map(user => 
                  <li key={user.userName}>
                    <p>{user.firstName} - {user.lastName} 
                       {this.state.showPlayedGames ? (
                         <span> {user.numberOfPlayedGames} the Number of Games Played</span>
                       ) : ''}
                    </p>
                  </li>
              )}
            </ol>
          </div>
        ) : ''}
      </div>
    );
  }
}

UserListComponent.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserListComponent;
