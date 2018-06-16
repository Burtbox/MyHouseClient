import { combineEpics } from 'redux-observable';
import householdsEpic from '../components/Households/householdsEpic';
import occupantsEpic from '../components/Occupants/occupantsEpic';

const combinedEpics = combineEpics(
    householdsEpic,
    occupantsEpic,
);

export default combinedEpics;
