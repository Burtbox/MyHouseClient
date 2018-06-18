import { combineEpics } from 'redux-observable';
import getHouseholdsOfUserRequestEpic from '../components/Households/householdsEpic';
import newsFeedRequestEpic from '../components/NewsFeed/newsFeedEpic';

const combinedEpics = combineEpics(
    getHouseholdsOfUserRequestEpic,
    newsFeedRequestEpic,
);

export default combinedEpics;
