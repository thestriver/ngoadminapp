import React, { Component } from "react";

class ProposalTable extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { users: [] };
  // }

  render() {
    // const users = [];
    const updateUser = this.props.updateUser;
    const deleteUser = this.props.deleteUser;

    // const Table = ({ users = [], updateUser, deleteUser }) => {
    return (
      <div className="table">
        <div className="table-header">
          <div className="row">
            <div className="column">Project Name</div>
            <div className="column">Project Lead</div>
            <div className="column">Descriptions</div>
            <div className="column">Options</div>
          </div>
        </div>
        <div className="table-body">
          {this.props.users.map((user, key) => {
            return (
              <div className={`row ${user.updating ? "updating" : ""}`}>
                <div className="column">{user.projectName}</div>
                <div className="column">{user.projectLead}</div>
                <div className="column">{user.description}</div>
                <div className="column">
                  <button className="icon" onClick={() => updateUser(key)}>
                    Edit
                  </button>
                  <button className="icon" onClick={() => deleteUser(key)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProposalTable;
