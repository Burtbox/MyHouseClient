import { shallow } from 'enzyme';
import * as React from 'react';
import { DisconnectedErrorMessage } from '../../../components/ErrorMessage';
import { IErrorMessageReducer } from '../../../components/ErrorMessage/errorMessageInterfaces';

describe('ErrorMessage test suite', () => {
    test('Render ErrorMessage component', () => {
        const props: IErrorMessageReducer = {
            dispatch: undefined,
            errorMessageText: 'unit test error',
        };
        const ErrorMessageScreen = shallow(
            <DisconnectedErrorMessage {...props} />,
        );
        expect(ErrorMessageScreen).toMatchSnapshot();
    });
});
