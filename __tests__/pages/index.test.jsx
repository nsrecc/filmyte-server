import React from 'react';
import { shallow } from 'enzyme';
import Home from 'pages/index';

describe('Home', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
