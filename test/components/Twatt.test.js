import Twatt from '../../src/components/Twatt.jsx';
import { expect } from 'chai';
import React from 'react';
import { mount, shallow, render } from 'enzyme';

describe('<Twatt />', () => {

  let twatt;

  before(() => {
    twatt = shallow(
      <Twatt author="Giovanni" pic="gio.png" text="This is a Twat!" />
    );
  });

  it(`should have an Author's name`, () => {
    expect(twatt.instance().props.author).to.be.deep.equal('Giovanni');
  });

  it('should have text', () => {
    expect(twatt.instance().props.text).to.be.deep.equal('This is a Twat!');
  });

  it(`should have the Author's profile picture`, () => {
    expect(twatt.instance().props.pic).to.be.deep.equal('gio.png');
  });
});
