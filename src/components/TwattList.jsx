import React, { Component } from 'react';
import R from 'ramda'

class TwattList extends Component {

  sortByDate(nodes) {
    return R.sortBy(R.prop('date'), nodes);
  }

  render() {
    return (
      <ul>{this.sortByDate(this.props.twats).map((tx, idx) =>
        (<li key={idx}>tw</li>))}</ul>
    );
  }
}

TwattList.defaultProps = {
  twats: []
};

export default TwattList;
