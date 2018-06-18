import { ActionsUnion, createAction } from '../../helpers/actionCreator';

export enum logoutActionTypes {
    LOGOUT_STARTED = 'LOGOUT_STARTED',
    LOGOUT_COMPLETED = 'LOGOUT_COMPLETED',
}

const logoutStarted = () => createAction(logoutActionTypes.LOGOUT_STARTED);
const logoutComplete = () => createAction(logoutActionTypes.LOGOUT_COMPLETED);

export const LogoutActions = {
    logoutStarted,
    logoutComplete,
};

export type LogoutActions = ActionsUnion<typeof LogoutActions>;
