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
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Leave Store</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
    );
  }
}