import React, { Component } from "react";
import Field from "./Field";

class ProposalForm extends Component {
  render() {
    const formState = this.props.formState;
    const onChange = this.props.onChange;
    const onSubmit = this.props.onSubmit;

    // const Form = ({ formState, onChange, onSubmit }) => {
    return (
      <form className="form" onSubmit={onSubmit}>
        <fieldset>
          <Field
            name="projectName"
            label="Project Name"
            value={formState.projectName}
            onChange={onChange}
          />
          <Field
            name="projectLead"
            label="Project Lead"
            value={formState.projectLead}
            onChange={onChange}
          />
          <Field
            name="description"
            label="Description"
            value={formState.description}
            onChange={onChange}
          />
        </fieldset>
        <button>{formState.mode}</button>
      </form>
    );
  }
}

export default ProposalForm;
