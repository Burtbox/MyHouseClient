import { NewsFeedsActions } from './linksActions';
import { INewsFeedsAction, INewsFeed } from './linksInterfaces';

function linksReducer(
  state = { },
  action: INewsFeedsAction,
) {
    switch (action.type) {
    case NewsFeedsActions.NEWSFEEDS_OF_USER:
        const newsFeed: INewsFeed[] = action.newsFeed;
        return {
            ...state,
            newsFeed,
        };
    default:
        return state;
    }
}

export default linksReducer;
