import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { IAddHouseholdRequest } from '../AddHousehold/addHouseholdInterfaces';
import { IUserDetails } from '../Users/usersInterfaces';
import { IHousehold, IInviteToHousehold } from './householdsInterfaces';

export enum householdsActionTypes {
    GET_HOUSEHOLDS_OF_USER_REQUEST = 'GET_HOUSEHOLDS_OF_USER_REQUEST',
    GET_HOUSEHOLDS_OF_USER_RESPONSE = 'GET_HOUSEHOLDS_OF_USER_RESPONSE',
    ADD_HOUSEHOLD_REQUEST = 'ADD_HOUSEHOLD_REQUEST',
    ADD_HOUSEHOLD_RESPONSE = 'ADD_HOUSEHOLD_RESPONSE',
    ADD_HOUSEHOLD_REQUEST_COMPLETE = 'ADD_HOUSEHOLD_REQUEST_COMPLETE',
    INVITE_TO_HOUSEHOLD_REQUEST = 'INVITE_TO_HOUSEHOLD_REQUEST',
    INVITE_TO_HOUSEHOLD_REQUEST_COMPLETE = 'INVITE_TO_HOUSEHOLD_REQUEST_COMPLETE',
}

const getHouseholdsOfUser = (userDetails: IUserDetails) =>
    createAction(householdsActionTypes.GET_HOUSEHOLDS_OF_USER_REQUEST, userDetails);

const receiveHouseholdsOfUser = (householdsResponse: IHousehold[]) =>
    createAction(householdsActionTypes.GET_HOUSEHOLDS_OF_USER_RESPONSE, householdsResponse);

const addHousehold = (household: IAddHouseholdRequest) =>
    createAction(householdsActionTypes.ADD_HOUSEHOLD_REQUEST, household);

const receiveHousehold = (addHouseholdResponse: IHousehold) =>
    createAction(householdsActionTypes.ADD_HOUSEHOLD_RESPONSE, addHouseholdResponse);

const addHouseholdComplete = () =>
    createAction(householdsActionTypes.ADD_HOUSEHOLD_REQUEST_COMPLETE);

const inviteToHousehold = (invitiation: IInviteToHousehold, token: string) =>
    createAction(householdsActionTypes.INVITE_TO_HOUSEHOLD_REQUEST, { invitiation, token });

const inviteToHouseholdComplete = () =>
    createAction(householdsActionTypes.INVITE_TO_HOUSEHOLD_REQUEST_COMPLETE);

export const HouseholdsActions = {
    getHouseholdsOfUser,
    receiveHouseholdsOfUser,
    addHousehold,
    receiveHousehold,
    addHouseholdComplete,
    inviteToHousehold,
    inviteToHouseholdComplete,
};

export type HouseholdsActions = ActionsUnion<typeof HouseholdsActions>;
