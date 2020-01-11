import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component TripSummary', () => {

  it('should render without crashing', () => {
    const component = shallow(<OrderOption name='name' type='number' />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const expectedTitle = 'Lorem ipsum';
    const component = shallow(<OrderOption name={expectedTitle} type='number' />);

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
  });

});
