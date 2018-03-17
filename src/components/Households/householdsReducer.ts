import { HouseholdsActions } from './householdsActions';
import { IHouseholdsAction, IHouseholdsReducer } from './householdsInterfaces';

function householdsReducer(
    state: IHouseholdsReducer = {
        households: [],
    },
    action: IHouseholdsAction,
): IHouseholdsReducer {
    let nextState: IHouseholdsReducer;
    switch (action.type) {
    case HouseholdsActions.HOUSEHOLDS_OF_USER:
        nextState = {
            ...state,
            households: action.households,
        };
        break;
    default:
        nextState = state;
        break;
    }
    return nextState;
}

export default householdsReducer;
