import { endpoints } from '../../enums/endpointsEnum';
import { HTTPMethod } from '../../enums/httpEnum';
import { ajaxPromise } from '../../helpers/ajaxHelper';
import { AjaxCallParams, AuthorizationResponse } from '../../interfaces/apiInterfaces';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { IUser } from './usersInterfaces';

export async function checkAuthorization(user: IUser): Promise<boolean> {
    let isLoggedIn = false;
    if (user && user.token && user.userId) {
        const ajaxCallParams: AjaxCallParams = {
            token: user.token,
            endpoint: endpoints.authorization,
            method: HTTPMethod.GET,
            urlParams: user.userId,
        };
        await ajaxPromise<AuthorizationResponse>(ajaxCallParams)
            .then((authorizationResponse: AuthorizationResponse) => {
                isLoggedIn = authorizationResponse ? authorizationResponse.isAuthorized : false;
            });
    }
    return isLoggedIn;
}

export async function checkHouseholdAuthorization(occupant: IOccupant): Promise<boolean> {
    let isLoggedIn = false;
    if (occupant && occupant.token && occupant.userId && occupant.occupantId) {
        const ajaxCallParams: AjaxCallParams = {
            token: occupant.token,
            endpoint: endpoints.authorization,
            method: HTTPMethod.GET,
            urlParams: occupant.userId + ',' + occupant.occupantId,
        };
        await ajaxPromise<AuthorizationResponse>(ajaxCallParams)
            .then((authorizationResponse: AuthorizationResponse) => {
                isLoggedIn = authorizationResponse ? authorizationResponse.isAuthorized : false;
            });
    }
    return isLoggedIn;
}
