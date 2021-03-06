import * as queryString from 'query-string';
import { houseFoodLinkUrl, houseMoneyLinkUrl } from '../../appConfig';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { IUser } from '../Users/usersInterfaces';

export function getHouseMoneyLinkUrl(user: IUser, occupantId: number) {
    const urlParams: IOccupant = {
        occupantId,
        userId: user.userId,
        displayName: user.displayName,
        email: user.email,
        token: user.token,
    };
    return houseMoneyLinkUrl + '?' + queryString.stringify(urlParams);
}

export function getHouseFoodLinkUrl(user: IUser, occupantId: number) {
    const urlParams: IOccupant = {
        occupantId,
        userId: user.userId,
        displayName: user.displayName,
        email: user.email,
        token: user.token,
    };
    return houseFoodLinkUrl + '?' + queryString.stringify(urlParams);
}
