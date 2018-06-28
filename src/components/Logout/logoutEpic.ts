import { Dispatch } from 'react-redux';
import { Action } from 'redux';
import auth from '../../helpers/firebase';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import { UsersActions } from '../Users/usersActions';
import { LogoutActions } from './logoutActions';

export function logoutUser(dispatch: Dispatch<Action>) {
    dispatch(LogoutActions.logoutStarted());
    auth.signOut()
        .then(() => {
            dispatch(UsersActions.receiveUser(undefined, false));
            dispatch(LogoutActions.logoutComplete());
        })
        .catch((error: Error) => {
            dispatch(ErrorMessageActions.addError(error.message));
            dispatch(LogoutActions.logoutComplete());
            throw error;
        });
}
