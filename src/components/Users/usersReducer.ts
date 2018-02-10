import { usersActions } from './usersActions';
import { IRecieveUserAction, IUsersProps } from '../Users/usersInterfaces';

function usersReducer(
    state: IUsersProps = {
        loggedInUser: undefined,
        isLoggedIn: undefined,
    },
    action: IRecieveUserAction,
) {
    switch (action.type) {
    case usersActions.RECEIVE_USER:
        return {
            ...state,
            loggedInUser: action.loggedInUser,
            isLoggedIn: action.isLoggedIn,
        };
    default:
        return state;
    }
}

// Export Reducer
export default usersReducer;
