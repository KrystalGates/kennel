import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Location.css"

export default class LocationList extends Component {
    render(){
        return(
<section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>{location.name}</h5>
                                <Link className="nav-link" to={`/locations/${location.id}`}>Address</Link>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        )}}
