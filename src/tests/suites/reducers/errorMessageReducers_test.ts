import { ErrorMessageActions, errorMessageActionTypes } from '../../../components/ErrorMessage/errorMessageActions';
import { IErrorMessageState } from '../../../components/ErrorMessage/errorMessageInterfaces';
import errorMessageReducer from '../../../components/ErrorMessage/errorMessageReducer';
import generateRandomString from '../../shared/randomStringGenerator';

describe('Error Message reducer test suite', () => {
    test('Add error reducer test', () => {
        const message = generateRandomString(50);
        const inputAction: ErrorMessageActions = {
            type: errorMessageActionTypes.ADD_ERROR,
            payload: message,
        };
        const state: IErrorMessageState = { errorMessageText: null };
        const actualResponse = errorMessageReducer(state, inputAction);

        expect(actualResponse).toEqual({ errorMessageText: message });
    });

    test('Remove error reducer test', () => {
        const inputAction: ErrorMessageActions = {
            type: errorMessageActionTypes.REMOVE_ERROR,
        };
        const state: IErrorMessageState = { errorMessageText: null };
        const actualResponse = errorMessageReducer(state, inputAction);

        expect(actualResponse).toEqual({ errorMessageText: null });
    });
});
