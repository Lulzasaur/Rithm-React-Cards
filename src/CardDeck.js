import React, { Component } from 'react';
import axios from 'axios'
import Card from './Card';

class CardDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {cards:[]};
    this.handleClick = this.handleClick.bind(this);
    this.deckId='';
  }

  async componentDidMount(){
    let resp = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    this.deckId = resp.data.deck_id;
  }

  async drawCard() {
    try{
      let resp = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
      let card = resp.data.cards[0].image;
      this.setState(st => ({cards:[...st.cards,card]
      }));
    }
    catch{
      this.setState(st => ({cards:['https://cdn.shopify.com/s/files/1/0928/4298/products/playingcardclearcaser.jpg?v=1465430916']
      }))
    }

  }

  handleClick(evt) {
    this.drawCard();
  }

  render() {

    return (
      <div>
         <button onClick={this.handleClick}>
        Draw a Card
        </button>
        {this.state.cards.map(img => <Card image={img} />)}
       
      </div>

    )
  }
}

export default CardDeck;

