import React, { Component } from "react";
import "./Animal.css";
import dog from "./DogIcon.svg";

export default class Animal extends Component {
  state = {
    saveDisabled: false
  };

  render() {
    return (
      <section className="animal">
        <div key={this.props.animal.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={dog} alt="dog" className="icon--dog" />
              {this.props.animal.name}
            </h4>
            <h6 className="card-title">{this.props.animal.breed}</h6>
            <div className="owner">
              <h5 className="belongsTo">Owner:</h5>
              {
                this.props.owners.find(
                  owner => owner.id === this.props.animal.ownerId
                ).name
              }
            </div>
            <button
              onClick={() => {
                this.setState({ saveDisabled: true }, () =>
                  this.props.dischargeAnimal(this.props.animal.id)
                );
              }}
              disabled={this.state.saveDisabled}
              className="card-link"
            >
              Discharge
            </button>
          </div>
        </div>
      </section>
    );
  }
}
