import { ErrorMessageActions, errorMessageActionTypes } from '../../../components/ErrorMessage/errorMessageActions';
import generateRandomString from '../../shared/randomStringGenerator';

describe('Error Message action creator test suite', () => {
    test('Add error action creator test', () => {
        const message = generateRandomString(50);
        const expectedResponse: ErrorMessageActions = {
            type: errorMessageActionTypes.ADD_ERROR,
            payload: message,
        };

        const actualResponse = ErrorMessageActions.addError(message);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test('Remove error action creator test', () => {
        const expectedResponse: ErrorMessageActions = {
            type: errorMessageActionTypes.REMOVE_ERROR,
        };

        const actualResponse = ErrorMessageActions.removeError();

        expect(actualResponse).toEqual(expectedResponse);
    });
});
