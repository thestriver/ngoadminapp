import React, { Component } from "react";

import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      items: []
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({
      items,
      username: "",
      password: ""
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <Table items={this.state.items} />
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newUsername={this.state.username}
          newPassword={this.state.password}
        />  
      </div>
    );
  }
}

export default App;
