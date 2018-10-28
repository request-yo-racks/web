import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('<Index />', () => {
  it('renders <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toBeTruthy();
  });
});
