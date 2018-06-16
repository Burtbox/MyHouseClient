import { newsFeedsActionTypes } from '../NewsFeed/newsFeedActions';
import { INewsFeedsAction } from '../NewsFeed/newsFeedInterfaces';
import { ILinksReducer } from './linksInterfaces';

function linksReducer(
    state: ILinksReducer = { newsFeedList: [] },
    action: INewsFeedsAction,
): ILinksReducer {
    let nextState: ILinksReducer;
    switch (action.type) {
    case newsFeedsActionTypes.NEWSFEEDS_OF_USER:
        nextState = {
            ...state,
            newsFeedList: action.newsFeedList,
        };
        break;
    default:
        nextState = state;
        break;
    }
    return nextState;
}

export default linksReducer;
