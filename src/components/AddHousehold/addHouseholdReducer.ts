import { AddHouseholdActions, addHouseholdActionTypes } from './addHouseholdActions';
import { IAddHouseholdReducer } from './addHouseholdInterfaces';

function addHouseholdReducer(
    state: IAddHouseholdReducer = {
        household: { name: null, occupantId: null },
    },
    action: AddHouseholdActions,
): IAddHouseholdReducer {
    let nextState: IAddHouseholdReducer;
    switch (action.type) {
    case addHouseholdActionTypes.ADD_HOUSEHOLD_RESPONSE:
        nextState = {
            ...state,
            household: action.payload,
        };
        break;
    default:
        nextState = state;
        break;
    }
    return nextState;
}

export default addHouseholdReducer;
