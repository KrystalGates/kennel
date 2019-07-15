import React, { Component } from "react";
import "./Owner.css"

export default class OwnerList extends Component {
  render() {
    return (
        <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>{owner.name}</h5>
                                <button
                                    onClick={() => this.props.deleteFunc("owners", owner.id)}
                                    className="card-link">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
    );
  }
}