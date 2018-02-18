import * as React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedMyAccount } from '../../../components/MyAccount';
import { IMyAccountProps } from '../../../components/MyAccount/myAccountInterfaces';
import loggedInUser from '../../shared/loggedInUser';

describe('My Account test suite', () => {
    test('Render my account screen', () => {
        const props: Readonly<IMyAccountProps> = {
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
