import * as React from 'react';
import { shallow } from 'enzyme';
import Links from '../../components/Links';

describe('Links test suite', () => {
    test('Render apps links component', () => {
        const LinksScreen = shallow(
            <Links />,
        );
        expect(LinksScreen).toMatchSnapshot();
    });
});
