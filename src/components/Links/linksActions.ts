import apiHelper from '../../helpers/apiHelper';
import { addError } from '../ErrorMessage/errorMessageActions';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { HTTPMethod } from '../../enums/httpEnum';
import { endpoints } from '../../enums/endpointsEnum';
import { INewsFeed, INewsFeedsAction } from './linksInterfaces';

export enum NewsFeedsActions {
    NEWSFEEDS_OF_USER = 'NEWSFEEDS_OF_USER',
}

export function getNewsFeed(token: string, occupant: IOccupant) {
    const request = apiHelper.apiCall(HTTPMethod.GET, endpoints.newsFeeds, token, occupant.userId);

    return (dispatch: Function) => {
        return request
            .then((response: INewsFeed[]) => {
                dispatch(getNewsFeedSuccessful(response));
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                throw error;
            });
    };
}

function getNewsFeedSuccessful(newsFeedsResponse: INewsFeed[]) {
    const response: INewsFeedsAction = {
        type: NewsFeedsActions.NEWSFEEDS_OF_USER,
        newsFeed: newsFeedsResponse,
    };
    return response;
}
