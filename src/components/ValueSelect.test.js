import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ValueSelect } from './ValueSelect';

Enzyme.configure({ adapter: new Adapter() });

it('renders placeholder inside it', () => {
    const div = document.createElement('div');

    const wrapper = mount(
        <ValueSelect onChange={jest.fn}/>
    );

    const p = wrapper.find('.default');
    expect(p.text()).toBe('Choose...');
});

it('renders 5 items', () => {
    const div = document.createElement('div');

    const wrapper = mount(
        <ValueSelect onChange={jest.fn}/>
    );

    const p = wrapper.find('.menu');
    expect(p.children()).toHaveLength(5);
});
