import { addError, errorMessageActions } from '../../../components/ErrorMessage/errorMessageActions';
import { IErrorMessageAction } from '../../../components/ErrorMessage/errorMessageInterfaces';

describe('Error Message action creator test suite', () => {
    test('Add error action creator test', () => {
        const expectedResponse: IErrorMessageAction = {
            type: errorMessageActions.ADD_ERROR,
            errorMessageText: 'unit test error message',
        };

        const actualResponse = addError('unit test error message');

        expect(actualResponse).toEqual(expectedResponse);
    });
});
