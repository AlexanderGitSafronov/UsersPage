import "./users.css";
import React, { Component } from "react";
import User from "./User/User";

class Users extends Component {

  render() {
    if (this.props.users.length > 0) {
      return (
        <div>
          {this.props.users.map((user) => {
            return <User onEdit={this.props.onEdit} onDelete={this.props.onDelete}  key={user.id} user={user} />;
          })}
        </div>
      );
    } else {
      return <h3 className="user">Список пользователей пуст</h3>;
    }
  }
}

export default Users;
