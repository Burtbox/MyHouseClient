import auth from '../../helpers/firebase';
import { addError } from '../ErrorMessage/errorMessageActions';
import { IUserObject, IRecieveUserAction } from '../Users/usersInterfaces';
import { Action } from 'redux';
import apiHelper from '../../helpers/apiHelper';
import { HTTPMethod } from '../../enums/httpEnum';
import { endpoints } from '../../enums/endpointsEnum';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { AuthorizationResponse } from '../../interfaces/apiInterfaces';

export enum usersActions {
    RECEIVE_USER = 'RECEIVE_USER',
    LOGOUT_STARTED = 'LOGOUT_STARTED',
    LOGOUT_COMPLETED = 'LOGOUT_COMPLETED',
}

export async function checkAuthorization(user: IUserObject): Promise<boolean> {
    let isLoggedIn = false;
    if (user && user.token && user.userId) {
        await apiHelper.apiCall<AuthorizationResponse>(HTTPMethod.GET, endpoints.authorization, user.token, user.userId)
            .then((authorizationResponse: AuthorizationResponse) => {
                isLoggedIn = authorizationResponse.isAuthorized;
            });
    }
    return isLoggedIn;
}

export async function checkHouseholdAuthorization(occupant: IOccupant): Promise<boolean> {
    let isLoggedIn = false;
    if (occupant && occupant.token && occupant.userId && occupant.occupantId) {
        await apiHelper.apiCall<AuthorizationResponse>(
            HTTPMethod.GET, endpoints.authorization, occupant.token, occupant.userId + occupant.occupantId,
        )
            .then((authorizationResponse: AuthorizationResponse) => {
                isLoggedIn = authorizationResponse.isAuthorized;
            });
    }
    return isLoggedIn;
}

export function logout() {
    const request = auth.signOut();

    return (dispatch: Function) => {
        dispatch(logoutStarted());
        return request
            .then(() => {
                dispatch(receiveUser(undefined, false));
                dispatch(logoutAttemptComplete());
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                dispatch(logoutAttemptComplete());
                throw error;
            });
    };
}

function logoutStarted() {
    const response: Action = {
        type: usersActions.LOGOUT_STARTED,
    };
    return response;
}

function logoutAttemptComplete() {
    const response: Action = {
        type: usersActions.LOGOUT_COMPLETED,
    };
    return response;
}

export function receiveUser(user: IUserObject, isLoggedIn: boolean) {
    const response: IRecieveUserAction = {
        isLoggedIn,
        type: usersActions.RECEIVE_USER,
        loggedInUser: user,
    };
    return response;
}

export default receiveUser;
