import * as React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../components/Footer';

describe('Footer test suite', () => {
    test('Render Footer component', () => {
        const FooterScreen = shallow(
            <Footer />,
        );
        expect(FooterScreen).toMatchSnapshot();
    });
});
