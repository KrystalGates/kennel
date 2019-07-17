import React, { Component } from "react";
import "./Employee.css";

export default class EmployeeForm extends Component {
    state = {
      name: "",
     position: ""
    };

    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    };

    constructNewEmployee = evt => {
      evt.preventDefault();
      if (this.state.name === "") {
        window.alert("Please Enter Name");
      }
      if(this.state.position ===""){
          window.alert("Please Enter Position")
      }
      else {
        const employee = {
          name: this.state.name,
          breed: this.state.address,
        };

        this.props
          .addEmployee(employee)
          .then(() => this.props.history.push("/employees"));
      }
    };

    render() {
      return (
        <React.Fragment>
          <form className="employeeForm">
            <div className="form-group">
              <label htmlFor="employeeName">Employee name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                placeholder="Employee name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="position"
                placeholder="Employee Position"
              />
            </div>
            <button
              type="submit"
              onClick={this.constructNewEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
  }