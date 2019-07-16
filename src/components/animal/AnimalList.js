import React, { Component } from 'react'
import { Link } from "react-router-dom";
import dog from "./DogIcon.svg"
import "./Animal.css"

export default class AnimalList extends Component {
    render () {
        return (
            <React.Fragment>
            <div className="animalButton">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/animals/new")}
                    }>
                Admit Animal
            </button>
        </div>
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={dog} alt="dog" className="icon--dog" />
                                <h5>{animal.name}</h5>
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}