import { Action, Dispatch } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import auth from '../../helpers/firebase';
import history from '../../main/history';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import { IUserResponseObject } from '../Users/usersInterfaces';
import { RegisterActions } from './registerActions';
import { IRegisterUserObject, IUserRegistrationObject } from './registerInterfaces';

// TODO: Make into observable
export function registerUser(user: IRegisterUserObject) {
    const request = auth.createUserWithEmailAndPassword(
        user.email,
        user.password,
    );

    return (dispatch: Dispatch<Action>) => {
        dispatch(RegisterActions.registerStarted());
        return request.then((register: IUserRegistrationObject) => {
            return register
                .updateProfile({ displayName: user.displayName })
                .then((authenticated: IUserResponseObject) => {
                    dispatch(RegisterActions.registerSuccessful(authenticated));
                    dispatch(RegisterActions.registerComplete());
                    history.push(myHouseRoutes.MyAccount);
                })
                .catch((error: Error) => {
                    dispatch(ErrorMessageActions.addError(error.message));
                    dispatch(RegisterActions.registerComplete());
                    throw error;
                });
        });
    };
}
