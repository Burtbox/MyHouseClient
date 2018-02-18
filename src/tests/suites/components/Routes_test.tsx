import * as React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedRoutes } from '../../../components/Routes';
import { IRoutesProps } from '../../../components/Routes/routesInterfaces';

describe('Routes test suite', () => {
    test('Render logged out Routesbar', () => {
        const props: Readonly<IRoutesProps> = {
            isLoggedIn: false,
        };
        const RoutesScreen = shallow(
            <DisconnectedRoutes {...props} />,
        );
        expect(RoutesScreen).toMatchSnapshot();
    });

    test('Render logged in Routesbar', () => {
        const props: Readonly<IRoutesProps> = {
            isLoggedIn: true,
        };
        const RoutesScreen = shallow(
            <DisconnectedRoutes {...props} />,
        );
        expect(RoutesScreen).toMatchSnapshot();
    });
});
