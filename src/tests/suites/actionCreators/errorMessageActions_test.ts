import { addError, errorMessageActions } from '../../../components/ErrorMessage/errorMessageActions';
import { IErrorMessageAction } from '../../../components/ErrorMessage/errorMessageInterfaces';
import generateRandomString from '../../shared/randomStringGenerator';

describe('Error Message action creator test suite', () => {
    test('Add error action creator test', () => {
        const message = generateRandomString(50);
        const expectedResponse: IErrorMessageAction = {
            type: errorMessageActions.ADD_ERROR,
            errorMessageText: message,
        };

        const actualResponse = addError(message);

        expect(actualResponse).toEqual(expectedResponse);
    });
});