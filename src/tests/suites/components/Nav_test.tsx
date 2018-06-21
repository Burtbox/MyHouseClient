import { shallow } from 'enzyme';
import * as React from 'react';
import { DisconnectedNav } from '../../../components/Nav';
import { INavProps } from '../../../components/Nav/navInterfaces';

describe('Nav test suite', () => {
    test('Render logged out navbar', () => {
        const props: Readonly<INavProps> = {
            dispatch: undefined,
            loggedInUser: {
                userId: 'loggedOutUser',
                displayName: 'logged out user',
                token: undefined,
                email: 'logged@out.com',
            },
            isLoggedIn: false,
            householdsArray: [],
            loading: 0,
        };
        const NavScreen = shallow(
            <DisconnectedNav {...props} />,
        );
        expect(NavScreen).toMatchSnapshot();
    });

    test('Render logged in navbar', () => {
        const props: Readonly<INavProps> = {
            dispatch: undefined,
            loggedInUser: {
                userId: 'loggedInUser',
                displayName: 'logged in user',
                token: 'superRealToken',
                email: 'logged@in.com',
            },
            isLoggedIn: true,
            householdsArray: [],
            loading: 0,
        };
        const NavScreen = shallow(
            <DisconnectedNav {...props} />,
        );
        expect(NavScreen).toMatchSnapshot();
    });
});
