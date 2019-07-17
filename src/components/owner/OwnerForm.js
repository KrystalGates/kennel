import React, { Component } from "react";
import "./Owner.css";

export default class OwnerForm extends Component {
  state = {
    name: "",
    phoneNumber: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewOwner = evt => {
    evt.preventDefault();
    if (this.state.name === "") {
      window.alert("Please Enter Name");
    }
    if(this.state.phoneNumber === ""){
        window.alert("Please Enter Phone Number");
    } else {
      const owner = {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber
      };

      this.props
        .addOwner(owner)
        .then(() => this.props.history.push("/owners"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="ownerForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Owner name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="phoneNumber"
              placeholder="Phone Number"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewOwner}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}