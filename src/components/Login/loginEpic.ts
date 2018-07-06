
import { Action, Dispatch } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import auth from '../../helpers/firebase';
import history from '../../main/history';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import { LoadingActions } from '../Loading/loadingActions';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';
import { LoginActions } from './loginActions';

export function loginUser(dispatch: Dispatch<Action>, login: IUserAuthenticationObject) {
    dispatch(LoadingActions.loadingStarted());
    auth.signInWithEmailAndPassword(login.email, login.password)
        .then((response) => {
            auth.currentUser.getIdToken(true).then((idToken: string) => {
                dispatch(LoginActions.loginSuccessful({
                    token: idToken,
                    userId: response.user.uid,
                    displayName: response.user.displayName,
                    email: response.user.email,
                }));
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
