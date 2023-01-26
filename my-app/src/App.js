import "./App.css";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import React, { Component } from "react";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

class App extends Component {
  constructor(props) {
    super(props);

    axios.get(baseUrl).then((res) => {
      this.setState({users : res.data.data})
    });

    this.state = {
      users: [
        
      ],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="section">
          <main>
            <Users
              users={this.state.users}
              onEdit={this.editUser}
              onDelete={this.deleteUser}
            />
          </main>
          <aside>
            <AddUserForm onAdd={this.addUser} />
          </aside>
        </div>
      </div>
    );
  }
  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }
  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;
    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] });
    });
  }
  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
}

export default App;
