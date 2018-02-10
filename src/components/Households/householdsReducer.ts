import { GET_HOUSEHOLDS_OF_USER_STARTED, GET_HOUSEHOLDS_OF_USER_COMPLETED, HOUSEHOLDS_OF_USER } from './householdsActions';
import { IHouseholdsAction } from './householdsInterfaces';

function householdsReducer(
  state = { },
  action: IHouseholdsAction,
) {
    switch (action.type) {
    case GET_HOUSEHOLDS_OF_USER_STARTED:
        return {
            ...state,
            loading: true,
        };
    case GET_HOUSEHOLDS_OF_USER_COMPLETED:
        return {
            ...state,
            loading: false,
        };
    case HOUSEHOLDS_OF_USER:
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
