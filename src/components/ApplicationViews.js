import { Route } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import ApiManager from "../modules/ApiManager";
import AnimalDetail from "./animal/AnimalDetail";

class ApplicationViews extends Component {
  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: []
  };

  componentDidMount() {
    const newState = {};

    ApiManager.all("animals").then(animals => (newState.animals = animals));
    ApiManager.all("employees").then(
      employees => (newState.employees = employees)
    );
    ApiManager.all("locations").then(
      locations => (newState.locations = locations)
    );
    ApiManager.all("owners")
      .then(owners => (newState.owners = owners))
      .then(() => this.setState(newState));
  }

  deleteAnimal = id =>
    ApiManager.delete("animals", id)
      .then(ApiManager.all("animals"))
      .then(animals => {
        this.props.history.push("/animals");
        this.setState({ animals: animals });
      });

  deleteEmployee = id =>
    ApiManager.delete("employees", id)
      .then(ApiManager.all("employees"))
      .then(employees => {
        this.setState({ employees: employees });
      });

  deleteOwner = id =>
    ApiManager.delete("owners", id)
      .then(ApiManager.all("owners"))
      .then(owners => {
        this.props.history.push("/owners");
        this.setState({ owners: owners });
      });



  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList animals={this.state.animals} />;
          }}
        />

        {/*
    This is a new route to handle a URL with the following pattern:
        http://localhost:3000/animals/1

    It will not handle the following URL because the `(\d+)`
    matches only numbers after the final slash in the URL
        http://localhost:3000/animals/jack
*/}
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            let animal = this.state.animals.find(
              animal => animal.id === parseInt(props.match.params.animalId)
            );
            if (!animal) {
              animal = { id: 404, name: "404", breed: "Dog not found" };
            }
            return (
              <AnimalDetail
                animal={animal}
                dischargeAnimal={this.deleteAnimal}
              />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return (
              <EmployeeList
                deleteEmployee={this.deleteEmployee}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return (
              <OwnerList
                deleteOwner={this.deleteOwner}
                owners={this.state.owners}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(ApplicationViews);
