import React, { Component } from "react";
import "./CharacterCard.css";

class CharacterCard extends Component {

    state = {
        clicked: false
    }

    render() {
        return (<div className="card">
            <div className="img-container" >
                <img
                    id={this.props.id}
                    alt={this.props.name}
                    src={this.props.image}
                    onClick={() => this.props.onClick(this.props.id)}
                />
            </div>
        </div>)
    }

};

export default CharacterCard;