
import { Action, Dispatch } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { auth, provider } from '../../helpers/firebase';
import history from '../../main/history';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import { LoadingActions } from '../Loading/loadingActions';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';
import { LoginActions } from './loginActions';

export function loginWithGoogle(dispatch: Dispatch<Action>) {
    dispatch(LoadingActions.loadingStarted());
    auth.signInWithPopup(provider)
        .then((response) => {
            handleUserPostLogin(dispatch, response);
        })
        .catch((error: Error) => {
            handleUserLoginError(dispatch, error);
        });
}

export function loginUser(dispatch: Dispatch<Action>, login: IUserAuthenticationObject) {
    dispatch(LoadingActions.loadingStarted());
    auth.signInAndRetrieveDataWithEmailAndPassword(login.email, login.password)
        .then((response) => {
            handleUserPostLogin(dispatch, response);
        })
        .catch((error: Error) => {
            handleUserLoginError(dispatch, error);
        });
}

const handleUserPostLogin = (dispatch: Dispatch<Action>, response: firebase.auth.UserCredential) => {
    response.user.getIdToken().then((token) => {
        dispatch(LoginActions.loginSuccessful({
            token,
            userId: response.user.uid,
            displayName: response.user.displayName,
            email: response.user.email,
        }));
        dispatch(LoadingActions.loadingComplete());
        history.push(myHouseRoutes.NewsFeed);
    }).catch((error: Error) => {
        handleUserLoginError(dispatch, error);
    });
};

const handleUserLoginError = (dispatch: Dispatch<Action>, error: Error) => {
    dispatch(ErrorMessageActions.addError(error.message));
    dispatch(LoadingActions.loadingComplete());
    throw error;
};
