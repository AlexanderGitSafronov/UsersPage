import React, { Component } from "react";
import './user.css'
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaPencilAlt} from "react-icons/fa";
import AddUserForm from "../../AddUserForm/AddUserForm";

class User extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <div className='icon'>
        <FaPencilAlt className="edit-icon" onClick={()=>{
            this.setState({editForm: !this.state.editForm})
        }}/>
          <IoCloseCircleSharp className="delete-icon" onClick={()=> this.props.onDelete(this.user.id)}/>
        </div>
        <img src={this.user.avatar} alt=""/>
        <h3>
          {this.user.first_name} {this.user.last_name}
        </h3>
        <p>{this.user.email}</p>
        <h5>{this.user.isHappy ? "Счастлив :)" : "Не очень :("}</h5>
        {this.state.editForm && <AddUserForm user={this.user} onAdd={this.props.onEdit}/>}
      </div>
    );
  }
}

export default User;
