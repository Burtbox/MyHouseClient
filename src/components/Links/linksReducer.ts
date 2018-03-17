import { NewsFeedsActions } from './linksActions';
import { INewsFeedsAction } from '../NewsFeed/newsFeedInterfaces';
import { ILinksReducer } from './linksInterfaces';

function linksReducer(
    state: ILinksReducer = { newsFeedList: [] },
    action: INewsFeedsAction,
): ILinksReducer {
    let nextState: ILinksReducer;
    switch (action.type) {
    case NewsFeedsActions.NEWSFEEDS_OF_USER:
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
