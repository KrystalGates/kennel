import React, { Component } from "react";

export default class LocationList extends Component {
    render(){
        return(
            <div className = "locations">
            <section>
                Nashville North
                523 Doggy Highway
            </section>
            <section>
                Nashville South
                789 Barkybark Ave.
            </section>
            </div>
        )
    }
}