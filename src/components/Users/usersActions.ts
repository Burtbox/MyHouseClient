import { endpoints } from '../../enums/endpointsEnum';
import { HTTPMethod } from '../../enums/httpEnum';
import apiHelper from '../../helpers/ajaxHelper';
import { AuthorizationResponse } from '../../interfaces/apiInterfaces';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { IRecieveUserAction, IUser } from '../Users/usersInterfaces';


export enum usersActions {
    RECEIVE_USER = 'RECEIVE_USER',
}

export async function checkAuthorization(user: IUser): Promise<boolean> {
    let isLoggedIn = false;
    if (user && user.token && user.userId) {
        await apiHelper.apiCall<AuthorizationResponse>(HTTPMethod.GET, endpoints.authorization, user.token, user.userId)
            .then((authorizationResponse: AuthorizationResponse) => {
                isLoggedIn = authorizationResponse ? authorizationResponse.isAuthorized : false;
            });
    }
    return isLoggedIn;
}

export async function checkHouseholdAuthorization(occupant: IOccupant): Promise<boolean> {
    let isLoggedIn = false;
    if (occupant && occupant.token && occupant.userId && occupant.occupantId) {
        await apiHelper.apiCall<AuthorizationResponse>(
            HTTPMethod.GET, endpoints.authorization, occupant.token, occupant.userId + ',' + occupant.occupantId,
        )
            .then((authorizationResponse: AuthorizationResponse) => {
                isLoggedIn = authorizationResponse ? authorizationResponse.isAuthorized : false;
            });
    }
    return isLoggedIn;
}

export function receiveUser(user: IUser, isLoggedIn: boolean) {
    const response: IRecieveUserAction = {
        isLoggedIn,
        type: usersActions.RECEIVE_USER,
        loggedInUser: user,
    };
    return response;
}

export default receiveUser;
