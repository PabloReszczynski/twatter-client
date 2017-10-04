import TwattList from '../../src/components/TwattList.jsx';
import Twatt from '../../src/components/Twatt.jsx';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import moment from 'moment';
import R from 'react';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('<TwattList />', () => {

  let twattlist;
  let twatts;

  before(() => {
    twatts = [
      { author: 'Giovanni', date: '3'},
      { author: 'Maxie', date: '4'},
      { author: 'Archie', date: '1'}
    ].map(tw => shallow(<Twatt author={tw.author} date={tw.date}/>));

    twattlist = shallow(
      <TwattList twats={twatts}/>
    );
  });

  it('A TwattList should have the twatts it was given', () => {
    const GioTwatt = shallow(<Twatt author="Giovanni" date="3" />);
    expect(twattlist).to.contain(<li>{GioTwatt}</li>);
  });

  it('A twattList should be sorted by date', () => {
    expect(twattlist.children().map(ch => ch.author)).to.be.deep.equal([
      'Archie',
      'Giovanni',
      'Maxie'
    ]);
  });
});
