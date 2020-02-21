import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {



  render() {
console.log(this.props.users)
    let userMapper = this.props.users.map( (user, i) => {
      return (<li>{user.username}</li>)

      
})
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {userMapper}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const giveProps = (state) => {
        return { users: state.users }
}
// connect this component to Redux
export default connect(giveProps)(Users);
