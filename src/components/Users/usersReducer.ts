import { IUsersReducer } from '../Users/usersInterfaces';
import { usersActions } from './usersActions';

function usersReducer(
    state: IUsersReducer = {
        loggedInUser: undefined,
        isLoggedIn: undefined,
    },
    action: UserAc,
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

export default usersReducer;
