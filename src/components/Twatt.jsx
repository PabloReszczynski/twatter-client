import React, { Component } from 'react';

class Twatt extends Component {
  render() {
    return (
      <div className="twatt">
        <h4>{this.props.author}</h4>
        <img src={this.props.pic}/>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

Twatt.defaultProps = {
  author: 'Mistery',
  text: '',
  pic: 'mistery.png'
};

export default Twatt;
