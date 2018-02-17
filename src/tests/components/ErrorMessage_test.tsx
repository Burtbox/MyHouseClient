import * as React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedErrorMessage } from '../../components/ErrorMessage';
import { IErrorMessageProps } from '../../components/ErrorMessage/errorMessageInterfaces';

describe('ErrorMessage test suite', () => {
    test('Render ErrorMessage component', () => {
        const props: IErrorMessageProps = {
            dispatch: undefined,
            errorMessageText: 'unit test error',
        };
        const ErrorMessageScreen = shallow(
            <DisconnectedErrorMessage {...props} />,
        );
        expect(ErrorMessageScreen).toMatchSnapshot();
    });
});
