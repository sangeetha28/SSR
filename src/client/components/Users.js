import React, { Component } from "react";
import { connect } from "react-redux";
import fetchUsers from "../../redux/actions/fetchUsers";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsersList() {
    // make sure to return the final mapped array
    return this.props.userList.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        {" "}
        This is Users Component <ul>{this.renderUsersList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
