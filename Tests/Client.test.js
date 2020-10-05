import React from 'react';

import {shallow, mount, configure} from 'enzyme';
import {render, screen} from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16';

// import App from '../Client/App.jsx';

configure({ adapter: new Adapter() });

describe('Client Test set up', () => {
  test('true equals true', () => {
    expect(true).toBe(true);
  })
})