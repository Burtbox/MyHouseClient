import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { IUserDetails } from '../Users/usersInterfaces';
import { INewsFeed } from './newsFeedInterfaces';

export enum newsFeedsActionTypes {
    GET_NEWSFEEDS_OF_USER_REQUEST = 'GET_NEWSFEEDS_OF_USER_REQUEST',
    GET_NEWSFEEDS_OF_USER_RESPONSE = 'GET_NEWSFEEDS_OF_USER_RESPONSE',
}

const getNewsFeed = (userDetails: IUserDetails) =>
    createAction(newsFeedsActionTypes.GET_NEWSFEEDS_OF_USER_REQUEST, userDetails);

const receiveNewsFeed = (newsFeedsResponse: INewsFeed[]) =>
    createAction(newsFeedsActionTypes.GET_NEWSFEEDS_OF_USER_RESPONSE, newsFeedsResponse);

export const NewsFeedActions = {
    getNewsFeed,
    receiveNewsFeed,
};

export type NewsFeedActions = ActionsUnion<typeof NewsFeedActions>;
