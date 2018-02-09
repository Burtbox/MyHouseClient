import { GET_HOUSEHOLDS_OF_OCCUPANT_STARTED, GET_HOUSEHOLDS_OF_OCCUPANT_COMPLETED, HOUSEHOLDS_OF_OCCUPANT } from './householdsActions';
import { IHouseholdsState, IHouseholdsAction } from './householdsInterfaces';

function householdsReducer(
  state: IHouseholdsState = {
      households: null,
      error: null,
      loading: false,
  },
  action: IHouseholdsAction,
) {
    switch (action.type) {
    case GET_HOUSEHOLDS_OF_OCCUPANT_STARTED:
        return {
            ...state,
            loading: true,
        };
    case GET_HOUSEHOLDS_OF_OCCUPANT_COMPLETED:
        return {
            ...state,
            loading: false,
        };
    case HOUSEHOLDS_OF_OCCUPANT:
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
