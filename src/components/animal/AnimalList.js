import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import "./Animal.css"
import { Link } from "react-router-dom";

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={dog} alt="dog" className="icon--dog" />
                                <h5>{animal.name}</h5>
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                {/* <button
                                    onClick={() => this.props.deleteAnimal("animals", animal.id)}
                                    className="card-link">Delete</button> */}
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}