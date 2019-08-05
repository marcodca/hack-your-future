import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

//Components
import GetAllUsersButton from './components/GetAllUsersButton';
import UserList from './components/UserList';
import SearchUser from './components/SearchUser';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUsers: [],
      loading: false,
      error: null,
      userDeleted: false
    };
    //A property for the publir url
    this.url = process.env.PUBLIC_URL;

    //We bind all the necesary methods
    this.getAllUsers = this.getAllUsers.bind(this);
    this.searchUserByName = this.searchUserByName.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  };


  getAllUsers() {
    this.setState({ loading: true });
    axios.get(this.url + '/api/')
      .then((response) => {
        this.setState({ loading: false, currentUsers: response.data });
        console.log(response)
      }
      )
      .catch((err) => {
        this.setState({ error: err })
      })
  }

  searchUserByName(valueToSearch) {
    this.setState({ loading: true });
    axios.get(this.url + '/api/search/' + valueToSearch)
      .then((response) => {
        this.setState({ loading: false, currentUsers: response.data });
        console.log(response)
      }
      )
      .catch((err) => {
        this.setState({ error: err })
      })
  }

  deleteUser(userId) {
    axios.delete(this.url + '/api/delete/' + userId)
      .then((response) => {
        console.log(response)
        this.setState({ userDeleted: true, currentUsers: [] });
      })
      .catch((err) => {
        this.setState({ error: err })
      })
  }

  render() {
    if (this.state.userDeleted) {
      setTimeout(() => {
        this.setState({ userDeleted: false })
      }, 1500);
    }
    return (
      <div className="container-fluid text-justify text-center">
        <div className="jumbotron jumbotron-fluid bg-info">
          <h1 className="display-4">Find <span className="your">your</span> user!</h1>
        </div>
        {this.state.userDeleted && <UserDeletedText />}
        <GetAllUsersButton getAllUsers={this.getAllUsers} />
        <SearchUser searchUserByName={this.searchUserByName} />
        {this.state.currentUsers.length < 1 ?
          <h4 className="mt-5 text-muted">No results to show</h4>
          :
          <UserList error={this.state.error} loading={this.state.loading} currentUsers={this.state.currentUsers} deleteUser={this.deleteUser} />
        }
      </div>
    );
  }
}

function UserDeletedText() {
  return <div class="alert alert-danger" role="alert">The user has been deleted</div>
}

export default App;
