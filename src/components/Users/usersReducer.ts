import { UsersActions, usersActionTypes } from './usersActions';
import { IUsersReducer } from './usersInterfaces';

function usersReducer(
    state: IUsersReducer = {
        loggedInUser: undefined,
        isLoggedIn: undefined,
    },
    action: UsersActions,
) {
    switch (action.type) {
    case usersActionTypes.RECEIVE_USER:
        return {
            ...state,
            loggedInUser: action.payload.loggedInUser,
            isLoggedIn: action.payload.isLoggedIn,
        };
    default:
        return state;
    }
}

export default usersReducer;
