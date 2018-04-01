import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ValueInput } from './ValueInput';

Enzyme.configure({ adapter: new Adapter() });

it('renders the placeholder inside it', () => {
    const div = document.createElement('div');

    const wrapper = mount(
        <ValueInput onChange={jest.fn}/>
    );

    const p = wrapper.find('input');
    expect(p.instance().placeholder).toBe('Enter value...');
});
