import React, { Component } from "react";

class Table extends Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
            {items.map((item) => {
              return (
                <tr>
                  <td key={item.username}>{item.username}</td>
                  <td key={item.password}>{item.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
