import { NewsFeedActions, newsFeedsActionTypes } from './newsFeedActions';
import { INewsFeedReducer } from './newsFeedInterfaces';

function newsFeedReducer(
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

export default newsFeedReducer;
