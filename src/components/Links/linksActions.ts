import apiHelper from '../../helpers/apiHelper';
import { addError } from '../ErrorMessage/errorMessageActions';
import { HTTPMethod } from '../../enums/httpEnum';
import { endpoints } from '../../enums/endpointsEnum';
import { IUserObject } from '../Users/usersInterfaces';
import { houseMoneyLinkUrl, houseFoodLinkUrl } from '../../appConfig';
import * as queryString from 'query-string';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { INewsFeed, INewsFeedsAction } from '../NewsFeed/newsFeedInterfaces';
import { loadingStarted, loadingComplete } from '../Loading/loadingActions';

export enum NewsFeedsActions {
    NEWSFEEDS_OF_USER = 'NEWSFEEDS_OF_USER',
}

export function getNewsFeed(token: string, occupant: IUserObject) {
    const request = apiHelper.apiCall<INewsFeed[]>(HTTPMethod.GET, endpoints.newsFeeds, token, occupant.userId);

    return (dispatch: Function) => {
        dispatch(loadingStarted());
        return request
            .then((response: INewsFeed[]) => {
                dispatch(getNewsFeedSuccessful(response));
                dispatch(loadingComplete());
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                dispatch(loadingComplete());
                throw error;
            });
    };
}

function getNewsFeedSuccessful(newsFeedsResponse: INewsFeed[]): INewsFeedsAction {
    const response: INewsFeedsAction = {
        type: NewsFeedsActions.NEWSFEEDS_OF_USER,
        newsFeedList: newsFeedsResponse,
    };
    return response;
}

export function gethouseMoneyLinkUrl(user: IUserObject, occupantId: number) {
    const urlParams: IOccupant = {
        occupantId,
        userId: user.userId,
        displayName: user.displayName,
        email: user.email,
        token: user.token,
    };
    return houseMoneyLinkUrl + '?' + queryString.stringify(urlParams);
}

export function gethouseFoodLinkUrl(user: IUserObject, occupantId: number) {
    const urlParams: IOccupant = {
        occupantId,
        userId: user.userId,
        displayName: user.displayName,
        email: user.email,
        token: user.token,
    };
    return houseFoodLinkUrl + '?' + queryString.stringify(urlParams);
}
