
import { Action, Dispatch } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import auth from '../../helpers/firebase';
import history from '../../main/history';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import { LoadingActions } from '../Loading/loadingActions';
import { IUserAuthenticationObject, IUserResponseObject } from '../Users/usersInterfaces';
import { LoginActions } from './loginActions';

export function loginUser(dispatch: Dispatch<Action>, login: IUserAuthenticationObject) {
    dispatch(LoadingActions.loadingStarted());
    auth.signInWithEmailAndPassword(login.email, login.password)
        .then((response: IUserResponseObject) => {
            auth.currentUser.getToken(true).then((idToken: string) => {
                dispatch(LoginActions.loginSuccessful(response, idToken));
                dispatch(LoadingActions.loadingComplete());
                history.push(myHouseRoutes.NewsFeed);
            }).catch((error: Error) => {
                dispatch(ErrorMessageActions.addError(error.message));
                dispatch(LoadingActions.loadingComplete());
                throw error;
            });
        })
        .catch((error: Error) => {
            dispatch(ErrorMessageActions.addError(error.message));
            dispatch(LoadingActions.loadingComplete());
            throw error;
        });
}
