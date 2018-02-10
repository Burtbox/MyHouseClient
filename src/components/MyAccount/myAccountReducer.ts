import { myAccountActions } from './myAccountActions';
import { IMyAccountReducerState, IMyAccountAction } from './interfaces';

function myAccountReducer(
  state: IMyAccountReducerState = {
      editing: false,
      deleting: false,
  },
  action: IMyAccountAction,
) {
    switch (action.type) {
    case myAccountActions.EDIT_USER_STARTED:
        return {
            ...state,
            editing: true,
        };
    case myAccountActions.EDIT_USER_COMPLETED:
        return {
            ...state,
            editing: false,
        };
    case myAccountActions.DELETE_USER_STARTED:
        return {
            ...state,
            deleting: true,
        };
    case myAccountActions.DELETE_USER_COMPLETED:
        return {
            ...state,
            deleting: false,
        };
    default:
        return state;
    }
}

export default myAccountReducer;
