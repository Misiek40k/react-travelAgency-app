import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should generate correct link', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='image' cost='1000' days={3} tags={['abc']} />);
    const expectedLink = '/trip/abc';
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should have correct src and alt in <img>', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='image' cost='1000' days={3} tags={['abc']} />);
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'image';
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days props', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' cost='1000' days={3} tags={['abc']} />);
    const expectedName = 'name';
    const expectedCost = 'from 1000';
    const expectedDays = '3 days';
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').childAt(0).text()).toEqual(expectedDays);
    expect(component.find('.details').childAt(1).text()).toEqual(expectedCost);
  });

  it('should throw error if props are not present', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render span for each tag', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' cost='1000' days={3} tags={['abc', 'def', 'ghj']} />);
    const expectedTag1 = 'abc';
    const expectedTag2 = 'def';
    const expectedTag3 = 'ghj';
    expect(component.find('.tag').at(0).text()).toEqual(expectedTag1);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTag2);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTag3);
  });

  it('should not render div tags when tags prop is false or empty array', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' cost='1000' days={3} tags={[]} />);
    expect(component.find('.tags').exists()).toEqual(false);
  });
});
