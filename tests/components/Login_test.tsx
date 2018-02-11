import * as React from 'react';
import { shallow } from 'enzyme';
// import { shallow, mount, render } from 'enzyme';
// import Login from '../components/Login';

describe('Login test suite', () => {
    test('render a div', () => {
        const wrapper = shallow(
            <div>Hello Jest!</div>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
