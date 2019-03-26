import { combineEpics } from 'redux-observable';
import addHouseholdRequestEpic from '../components/AddHousehold/addHouseholdEpic';
import getHouseholdsOfUserRequestEpic from '../components/Households/householdsEpic';
import inviteToHouseholdRequestEpic from '../components/Households/householdsInviteEpic';
import newsFeedRequestEpic from '../components/NewsFeed/newsFeedEpic';
import updateOccupantRequestEpic from '../components/Occupants/updateOccupantEpic';
import routesEpic from '../components/Routes/routesEpic';

const combinedEpics = combineEpics(
    getHouseholdsOfUserRequestEpic,
    newsFeedRequestEpic,
    addHouseholdRequestEpic,
    inviteToHouseholdRequestEpic,
    updateOccupantRequestEpic,
    routesEpic,
);

export default combinedEpics;
