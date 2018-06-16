import { shallow } from 'enzyme';
import * as React from 'react';
import { DisconnectedLogin } from '../../../components/Login';
import { ILoginReducer } from '../../../components/Login/loginInterfaces';

describe('Login test suite', () => {
    // Alternative here is to wrap with provider, but that was a pain and I'm not sure of the benefit
    test('Render login screen', () => {
        const props: Readonly<ILoginReducer> = {
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
