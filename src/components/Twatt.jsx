import React, { Component } from 'react';
import moment from 'moment';

class Twatt extends Component {
  render() {
    return (
      <div className="twatt">
        <span className="author">{this.props.author}</span>
        <img className="avatar" src={this.props.pic}/>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

Twatt.defaultProps = {
  author: 'Mistery',
  text: '',
  pic: 'mistery.png',
  date: '0'
};

export default Twatt;
