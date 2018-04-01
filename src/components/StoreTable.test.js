import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StoreTable } from './StoreTable';

Enzyme.configure({ adapter: new Adapter() });


const items = [1, 2, 3, 4, 5, 6].map((idx) => {
    return {
        value: 'value' + idx,
        selection: 'selection' + idx
    };
});

it('renders nothing if no items were provided', () => {
    const div = document.createElement('div');

    const wrapper = mount(
        <StoreTable items={[]}/>
    );

    const p = wrapper.find('td');
    expect(p.exists()).toBe(false);
});
    
it('renders table rows with items', () => {
    const div = document.createElement('div');

    const wrapper = mount(
        <StoreTable items={items}/>
    );

    const p = wrapper.find('tbody');
    expect(p.children()).toHaveLength(6);
});

it('renders table rows with values and selections', () => {
    const div = document.createElement('div');

    const wrapper = mount(
        <StoreTable items={items}/>
    );

    const p = wrapper.find('tbody');

    // picking random cells
    expect(p.find('tr').at(0).find('td').at(0).text()).toBe('value1');
    expect(p.find('tr').at(1).find('td').at(1).text()).toBe('selection2');
    expect(p.find('tr').at(1).find('td').at(1).text()).toBe('selection2');
    expect(p.find('tr').at(5).find('td').at(0).text()).toBe('value6');
    expect(p.find('tr').at(3).find('td').at(1).text()).toBe('selection4');
});

