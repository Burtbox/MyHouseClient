import { combineEpics } from 'redux-observable';
import addHouseholdRequestEpic from '../components/AddHousehold/addHouseholdEpic';
import getHouseholdsOfUserRequestEpic from '../components/Households/householdsEpic';
import newsFeedRequestEpic from '../components/NewsFeed/newsFeedEpic';

const combinedEpics = combineEpics(
    getHouseholdsOfUserRequestEpic,
    newsFeedRequestEpic,
    addHouseholdRequestEpic,
);

export default combinedEpics;
