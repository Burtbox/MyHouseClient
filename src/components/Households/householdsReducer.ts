import { HouseholdsActions, householdsActionTypes } from './householdsActions';
import { IHouseholdsReducer } from './householdsInterfaces';

function householdsReducer(
    state: IHouseholdsReducer = {
        householdsArray: [],
        householdAdded: false,
    },
    action: HouseholdsActions,
): IHouseholdsReducer {
    let nextState: IHouseholdsReducer;
    switch (action.type) {
    case householdsActionTypes.GET_HOUSEHOLDS_OF_USER_RESPONSE:
        nextState = {
            ...state,
            householdsArray: action.payload,
        };
        break;
    case householdsActionTypes.ADD_HOUSEHOLD_RESPONSE:
        nextState = {
            ...state,
            householdAdded: true,
            householdsArray: [...state.householdsArray, action.payload],
        };
        break;
    case householdsActionTypes.ADD_HOUSEHOLD_REQUEST_COMPLETE:
        nextState = {
            ...state,
            householdAdded: false,
        };
        break;
    default:
        nextState = state;
        break;
    }
    return nextState;
}

export default householdsReducer;
