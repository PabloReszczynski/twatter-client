import Twatt from './Twatt.jsx';
import React, { Component } from 'react';

const welcome = `
Welcome to Twatter! I will be your guide in this amazing social network!!
Please, follow me.
`

export default class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <span>Twatter!</span>
        <Twatt
          author="Giovanni"
          text={welcome}
          pic="https://mtbifiction.files.wordpress.com/2016/08/giovanni_in_pokemon_mewtwo_returns.jpg?w=665"
        />
      </div>
    );
  }
}
