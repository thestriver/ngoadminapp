import React, { Component } from "react";

class Field extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { date: new Date() };
  //   this.state = { label: "", name: "", value: "" };
  // }

  // const label = "";
  //   const name = "";
  //   const value = "";
  //   const onChange = this.props.onChange;

  // const Field = ({ label = "", name = "", value = "", onChange }) => {

  render() {
    return (
      <div className="field">
        <label className="block uppercase tracking-wide text-gray-500 text-lg mt-2" htmlFor={this.props.name}>{this.props.label}</label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-8 px-4"
          type=""
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
    


      </div>
    );
  }
}

export default Field;
