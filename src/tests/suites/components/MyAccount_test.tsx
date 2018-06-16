import { shallow } from 'enzyme';
import * as React from 'react';
import { DisconnectedMyAccount } from '../../../components/MyAccount';
import { IMyAccountReducer } from '../../../components/MyAccount/myAccountInterfaces';
import loggedInUser from '../../shared/loggedInUser';

describe('My Account test suite', () => {
    test('Render my account screen', () => {
        const props: Readonly<IMyAccountReducer> = {
            loggedInUser,
            history: undefined,
            dispatch: undefined,
            editing: false,
            deleting: false,
        };
        const MyAccountScreen = shallow(
            <DisconnectedMyAccount {...props} />,
        );
        expect(MyAccountScreen).toMatchSnapshot();
    });
});
