import { IUserObject, IRecieveUserAction } from '../Users/usersInterfaces';
import apiHelper from '../../helpers/apiHelper';
import { HTTPMethod } from '../../enums/httpEnum';
import { endpoints } from '../../enums/endpointsEnum';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { AuthorizationResponse } from '../../interfaces/apiInterfaces';


export enum usersActions {
    RECEIVE_USER = 'RECEIVE_USER',
}

export async function checkAuthorization(user: IUserObject): Promise<boolean> {
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

export function receiveUser(user: IUserObject, isLoggedIn: boolean) {
    const response: IRecieveUserAction = {
        isLoggedIn,
        type: usersActions.RECEIVE_USER,
        loggedInUser: user,
    };
    return response;
}

export default receiveUser;
