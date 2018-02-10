import { RECEIVE_USER } from '../Nav/navActions';
import { IRecieveUserAction } from '../../interfaces/userInterfaces';
import { IOccupant } from '../../interfaces/occupantsInterfaces';

function navReducer(
    state: IOccupant = {
        userId: null,
        email: null,
        displayName: null,
        token: null,
        householdId: null,
        occupantId: null,
    },
    action: IRecieveUserAction,
) {
    switch (action.type) {
    case RECEIVE_USER:
        return {
            ...state,
            loggedInUser: action.loggedInUser,
        };
    default:
        return state;
    }
}

// Export Reducer
export default navReducer;
