import * as React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedRoutes } from '../../../components/Routes';
import { IRoutesProps } from '../../../components/Routes/routesInterfaces';

describe('Routes test suite', () => {
    test('Render logged out Routes', () => {
        const props: Readonly<IRoutesProps> = {
            isLoggedIn: false,
            loggedInUser: null,
        };
        const RoutesScreen = shallow(
            <DisconnectedRoutes {...props} />,
        );
        expect(RoutesScreen).toMatchSnapshot();
    });

    // Need to mock api call for this one! 
    // test('Render logged in Routes', () => {
    //     const props: Readonly<IRoutesProps> = {
    //         isLoggedIn: true,
    //         loggedInUser: {
    //             userId: 'Ed',
    //             token: 'token',
    //             displayName: 'Ed',
    //             email: 'email',
    //         },
    //     };
    //     const RoutesScreen = shallow(
    //         <DisconnectedRoutes {...props} />,
    //     );
    //     expect(RoutesScreen).toMatchSnapshot();
    // });
});
