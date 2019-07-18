import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Employee.css";

export default class EmployeeCard extends Component {
    render(){
        return(
            <section className="employee">
              <div key={this.props.employee.id} className="card">
                  <div className="card-body">
                      <div className="card-title">
                          <h5>{this.props.employee.name}</h5>
                          <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Position</Link>
                          <button
                              onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                              className="card-link">Delete</button>
                      </div>
                  </div>
              </div>
      </section>
        )
    }
}