import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('Given we load our app', () => {
  it('Then renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toBeTruthy();
  });
});
