import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PresOut from './PresOut';
import { BrowserRouter } from 'react-router-dom'


Enzyme.configure({ adapter: new Adapter() });

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => {
    return {
        value: 'value' + idx,
        selection: 'selection' + idx
    };
});


it('renders "no items message" if items are not provided', () => {
    const div = document.createElement('div');

    // wrap container in BrowserRouter since we use Link inside PresOut
    const wrapper = mount(
        <BrowserRouter>
          <PresOut items={[]}/>
        </BrowserRouter>
    );

    const p = wrapper.find('p');
    expect(p.text()).toContain('No items were found');
});

it('renders pagination component', () => {
    const div = document.createElement('div');

    // wrap container in BrowserRouter since we use Link inside PresOut
    const wrapper = mount(
        <BrowserRouter>
          <PresOut items={items}/>
        </BrowserRouter>
    );

    const p = wrapper.find('.pagination');
    // two pages should be displayed for 11 items
    // checking how many pagination buttons are there
    expect(p.children()).toHaveLength(2);
});
