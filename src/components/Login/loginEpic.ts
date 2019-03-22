
import { Action, Dispatch } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { auth, provider } from '../../helpers/firebase';
import history from '../../main/history';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import { LoadingActions } from '../Loading/loadingActions';
import { LoginActions } from './loginActions';

export function loginUser(dispatch: Dispatch<Action>) {
    dispatch(LoadingActions.loadingStarted());
    auth.signInWithPopup(provider)
        .then((response) => {
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
