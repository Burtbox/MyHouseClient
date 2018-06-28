import * as queryString from 'query-string';
import { myHouseRoutes } from '../../enums/routesEnum';
import { ILogoutDetails, LogoutReason } from '../Logout/logoutInterfaces';

export function getLogoutUrlWithDetails(logoutReason: LogoutReason) {
    const logoutDetails: ILogoutDetails = {
        logoutReason,
    };
    return myHouseRoutes.Logout + '?' + queryString.stringify(logoutDetails);
}
