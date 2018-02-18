import errorMessageReducer from '../../../components/ErrorMessage/errorMessageReducer';
import { errorMessageActions } from '../../../components/ErrorMessage/errorMessageActions';
import { IErrorMessageAction, IErrorMessageState } from '../../../components/ErrorMessage/errorMessageInterfaces';
import generateRandomString from '../../shared/randomStringGenerator';

describe('Error Message reducer test suite', () => {
    test('Add error reducer test', () => {
        const message = generateRandomString(50);
        const inputAction: IErrorMessageAction = {
            type: errorMessageActions.ADD_ERROR,
            errorMessageText: message,
        };
        const state: IErrorMessageState = { errorMessageText: null };
        const actualResponse = errorMessageReducer(state, inputAction);

        expect(actualResponse).toEqual({ errorMessageText: message });
    });

    test('Remove error reducer test', () => {
        const inputAction: IErrorMessageAction = {
            type: errorMessageActions.REMOVE_ERROR,
            errorMessageText: undefined,
        };
        const state: IErrorMessageState = { errorMessageText: null };
        const actualResponse = errorMessageReducer(state, inputAction);

        expect(actualResponse).toEqual({ errorMessageText: null });
    });
});
