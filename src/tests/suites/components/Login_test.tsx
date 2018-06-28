import { shallow } from 'enzyme';
import * as React from 'react';
import { DisconnectedLogin } from '../../../components/Login';
import { ILoginProps } from '../../../components/Login/loginInterfaces';

describe('Login test suite', () => {
    // Alternative here is to wrap with provider, but that was a pain and I'm not sure of the benefit
    test('Render login screen', () => {
        const props: Readonly<ILoginProps> = {
            history: undefined,
            loggingIn: false,
            dispatch: undefined,
            classes: undefined,
        };
        const loginScreen = shallow(
            <DisconnectedLogin {...props} />,
        );
        expect(loginScreen).toMatchSnapshot();
    });
});
