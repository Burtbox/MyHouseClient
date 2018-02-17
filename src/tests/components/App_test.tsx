import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App test suite', () => {
    test('Render app component', () => {
        const AppScreen = shallow(
            <App />,
        );
        expect(AppScreen).toMatchSnapshot();
    });
});
