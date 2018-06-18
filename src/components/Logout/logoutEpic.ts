import { Action, Dispatch } from 'redux';
import auth from '../../helpers/firebase';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import { UsersActions } from '../Users/usersActions';
import { LogoutActions } from './logoutActions';

export function logoutUser() {
    const request = auth.signOut();

    return (dispatch: Dispatch<Action>) => {
        dispatch(LogoutActions.logoutStarted());
        return request
            .then(() => {
                dispatch(UsersActions.receiveUser(undefined, false));
                dispatch(LogoutActions.logoutComplete());
            })
            .catch((error: Error) => {
                dispatch(ErrorMessageActions.addError(error.message));
                dispatch(LogoutActions.logoutComplete());
                throw error;
            });
    };
}
