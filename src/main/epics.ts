import { combineEpics } from 'redux-observable';
import addHouseholdRequestEpic from '../components/AddHousehold/addHouseholdEpic';
import acceptInviteToHouseholdRequestEpic from '../components/Households/householdsAcceptInviteEpic';
import getHouseholdsOfUserRequestEpic from '../components/Households/householdsEpic';
import inviteToHouseholdRequestEpic from '../components/Households/householdsInviteEpic';
import newsFeedRequestEpic from '../components/NewsFeed/newsFeedEpic';

const combinedEpics = combineEpics(
    getHouseholdsOfUserRequestEpic,
    newsFeedRequestEpic,
    addHouseholdRequestEpic,
    inviteToHouseholdRequestEpic,
    acceptInviteToHouseholdRequestEpic,
);

export default combinedEpics;
