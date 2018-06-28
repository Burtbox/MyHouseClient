import { shallow } from 'enzyme';
import * as React from 'react';
import { DisconnectedRegister } from '../../../components/Register';
import { IRegisterProps } from '../../../components/Register/registerInterfaces';

describe('Register test suite', () => {
    test('Render register screen', () => {
        const props: Readonly<IRegisterProps> = {
            history: undefined,
            registering: false,
            dispatch: undefined,
            classes: undefined,
        };
        const registerScreen = shallow(
            <DisconnectedRegister {...props} />,
        );
        expect(registerScreen).toMatchSnapshot();
    });
});
