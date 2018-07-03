import { Action, Dispatch } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import auth from '../../helpers/firebase';
import history from '../../main/history';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import { RegisterActions } from './registerActions';
import { IRegisterUserObject } from './registerInterfaces';

export function registerUser(dispatch: Dispatch<Action>, user: IRegisterUserObject) {
    dispatch(RegisterActions.registerStarted());
    auth.createUserWithEmailAndPassword(
        user.email,
        user.password,
    ).then(() => {
        auth.currentUser.updateProfile({
            displayName: user.displayName,
            photoURL: '',
        }).then(() => {
            auth.currentUser.getIdToken(true).then((token: string) => {
                dispatch(RegisterActions.registerSuccessful({
                    token,
                    displayName: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                }));
                dispatch(RegisterActions.registerComplete());
                history.push(myHouseRoutes.AddHousehold);
            });
        })
            .catch((error: Error) => {
                dispatch(ErrorMessageActions.addError(error.message));
                dispatch(RegisterActions.registerComplete());
                throw error;
            });
    });
}
