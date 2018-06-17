import { NewsFeedActions, newsFeedsActionTypes } from '../NewsFeed/newsFeedActions';
import { INewsFeedReducer } from './newsFeedInterfaces';

function linksReducer(
    state: INewsFeedReducer = { newsFeedList: [] },
    action: NewsFeedActions,
): INewsFeedReducer {
    let nextState: INewsFeedReducer;
    switch (action.type) {
    case newsFeedsActionTypes.GET_NEWSFEEDS_OF_USER_RESPONSE:
        nextState = {
            ...state,
            newsFeedList: action.payload,
        };
        break;
    default:
        nextState = state;
        break;
    }
    return nextState;
}

export default linksReducer;
