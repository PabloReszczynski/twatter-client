import TwattList from '../../src/components/TwattList.jsx';
import Twat from '../../src/components/Twat.jsx';
import { expect } from 'chai';
import enzymify from 'expect-enzyme';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import moment from 'moment';

expect.extend(enzymify());

describe('<TwattList />', () => {

  let twatlist;
  let twats;

  before(() => {
    twats = [
      { author: 'Giovanni', date: moment('2017-12-3') },
      { author: 'Maxie', date: moment('2017-12-4')},
      { author: 'Archie', date: moment('2017-12-1')}
    ].map(tw => shallow(<Twat author={tw.author} date={tw.date}/>));

    twatlist = shallow(
      <TwattList twats={twats}/>
    );
  });

  it('A TwattList should have 0 or more twatts', () => {
    expect(twatlist).toContain(Twat);
  });

  it('A twattList should be sorted by date', () => {
    expect(twatlist.children().map(ch => ch.author)).to.be.deep.equal([
      'Archie',
      'Giovanni',
      'Maxie'
    ]);
  });
});
