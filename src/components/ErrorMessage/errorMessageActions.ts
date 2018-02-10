import { IErrorMessageAction } from './errorMessageInterfaces';

// Export Actions
export enum errorMessageActions {
    ADD_ERROR = 'ADD_ERROR',
    REMOVE_ERROR = 'REMOVE_ERROR',
}

export function addError(errorMessageText: string) {
    const response: IErrorMessageAction = {
        errorMessageText,
        type: errorMessageActions.ADD_ERROR,
    };
    return response;
}

export function removeError() {
    const response: IErrorMessageAction = {
        type: errorMessageActions.REMOVE_ERROR,
        errorMessageText: undefined,
    };
    return response;
}
