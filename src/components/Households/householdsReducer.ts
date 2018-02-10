import { HouseholdsActions } from './householdsActions';
import { IHouseholdsAction } from './householdsInterfaces';

function householdsReducer(
  state = { },
  action: IHouseholdsAction,
) {
    switch (action.type) {
    case HouseholdsActions.GET_HOUSEHOLDS_OF_USER_STARTED:
        return {
            ...state,
            loading: true,
        };
    case HouseholdsActions.GET_HOUSEHOLDS_OF_USER_COMPLETED:
        return {
            ...state,
            loading: false,
        };
    case HouseholdsActions.HOUSEHOLDS_OF_USER:
        return {
            ...state,
            loading: true,
            households: action.households,
        };
    default:
        return state;
    }
}

export default householdsReducer;
