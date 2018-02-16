import * as React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedLogin } from '../../components/Login';
import { ILoginProps } from '../../components/Login/loginInterfaces';

describe('Login test suite', () => {
    // Alternative here is to wrap with provider, but that was a pain and I'm not sure of the benefit
    test('Render login screen', () => {
        const props: Readonly<ILoginProps> = {
            user: {
                userId: undefined,
                token: undefined,
                email: undefined,
                displayName: undefined,
            },
            history: undefined,
            loggingIn: false,
            dispatch: undefined,
        };
        const loginScreen = shallow(
            <DisconnectedLogin {...props} />,
        );
        expect(loginScreen).toMatchSnapshot();
    });
});
