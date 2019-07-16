import { Route } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import ApiManager from "../modules/ApiManager";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import AnimalForm from "./animal/AnimalForm";

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
        this.props.history.push("/employees");
        this.setState({ employees: employees });
      });

  deleteOwner = id =>
    ApiManager.delete("owners", id)
      .then(ApiManager.all("owners"))
      .then(owners => {
        this.props.history.push("/owners");
        this.setState({ owners: owners });
      });

  addAnimal = animal =>
    ApiManager.post(animal)
      .then(() => ApiManager.all("animals"))
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

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
          path="/locations/:locationId(\d+)"
          render={props => {
            let location = this.state.locations.find(
              location =>
                location.id === parseInt(props.match.params.locationId)
            );
            if (!location) {
              location = { id: 404, name: "404", address: "Not found" };
            }
            return <LocationDetail location={location} />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList {...props} animals={this.state.animals} />;
          }}
        />
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
                owners={this.state.owners}
              />
            );
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return (
              <AnimalForm
              {...props}
                addAnimal={this.addAnimal}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          exact
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
          path="/employees/:employeeId(\d+)"
          render={props => {
            let employee = this.state.employees.find(
              employee =>
                employee.id === parseInt(props.match.params.employeeId)
            );
            if (!employee) {
              employee = { id: 404, name: "Employee Not Found" };
            }
            return (
              <EmployeeDetail
                employee={employee}
                deleteEmployee={this.deleteEmployee}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(ApplicationViews);
