import { usersActions } from './usersActions';
import { IRecieveUserAction } from '../Users/usersInterfaces';
import { IOccupant } from '../Occupants/occupantsInterfaces';

function usersReducer(
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
    case usersActions.RECEIVE_USER:
        return {
            ...state,
            loggedInUser: action.loggedInUser,
        };
    default:
        return state;
    }
}

// Export Reducer
export default usersReducer;
