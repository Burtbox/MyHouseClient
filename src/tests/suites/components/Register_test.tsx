import { shallow } from 'enzyme';
import * as React from 'react';
import { DisconnectedRegister } from '../../../components/Register';
import { IRegisterReducer } from '../../../components/Register/registerInterfaces';

describe('Register test suite', () => {
    test('Render register screen', () => {
        const props: Readonly<IRegisterReducer> = {
            history: undefined,
            registering: false,
            dispatch: undefined,
        };
        const registerScreen = shallow(
            <DisconnectedRegister {...props} />,
        );
        expect(registerScreen).toMatchSnapshot();
    });
});
