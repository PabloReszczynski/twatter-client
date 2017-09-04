import Twatt from '../src/components/Twatt.jsx';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';

describe('<Twatt />', () => {

  let twatt;

  before(() => {
    twatt = shallow(
      <Twatt author="Giovanni" pic="gio.png">This is a Twatt!</Twatt>
    );
  });

  it(`should have an Author's name`, () => {
    expect(twatt.props.author).to.be.deep.equal('Giovanni');
  });

  it('should have text', () => {
    expect(twatt.props.innerText).to.be.deep.equal('This is a Twatt!');
  });

  it(`should have the Author's profile picture`, () => {
    expect(twatt.props.pic).to.be.deep.equal('gio.png');
  });
});
