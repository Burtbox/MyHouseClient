import * as React from 'react';
import { shallow } from 'enzyme';
// import { shallow, mount, render } from 'enzyme';
import { DisconnectedLogin } from '../../src/components/Login';
import { ILoginProps } from '../../src/components/Login/loginInterfaces';

describe('Login test suite', () => {
    test('render a div', () => {
        const wrapper = shallow(
            <div>Hello Jest!</div>,
        );
        expect(wrapper).toMatchSnapshot();
    });

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
            <DisconnectedLogin
                {...props}
            />,
        );
        expect(loginScreen).toMatchSnapshot();
    });
});
