import React, { Component } from 'react';
import './Card.css'

class Card extends Component {

  render() {

    return (
      <div className="card">
        <img src={this.props.image}></img>
      </div>
    )
  }
}

export default Card;