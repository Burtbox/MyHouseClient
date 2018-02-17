import * as React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedChangePassword } from '../../components/ChangePassword';
import { IChangePasswordProps } from '../../components/ChangePassword/changePasswordInterfaces';
import loggedInUser from '../shared/loggedInUser';

describe('Change Password test suite', () => {
    test('Render Change Password component', () => {
        const props: IChangePasswordProps = {
            loggedInUser,
            dispatch: null,
            history: null,
        };
        const ChangePasswordScreen = shallow(
            <DisconnectedChangePassword {...props} />,
        );
        expect(ChangePasswordScreen).toMatchSnapshot();
    });
});
