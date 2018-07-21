import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { IAddHouseholdRequest, IGetHouseholdsRequest } from '../AddHousehold/addHouseholdInterfaces';
import { IHousehold, IHouseholdAccept, IInviteToHouseholdRequest } from './householdsInterfaces';

export enum householdsActionTypes {
    GET_HOUSEHOLDS_OF_USER_REQUEST = 'GET_HOUSEHOLDS_OF_USER_REQUEST',
    GET_HOUSEHOLDS_OF_USER_RESPONSE = 'GET_HOUSEHOLDS_OF_USER_RESPONSE',
    ADD_HOUSEHOLD_REQUEST = 'ADD_HOUSEHOLD_REQUEST',
    ADD_HOUSEHOLD_RESPONSE = 'ADD_HOUSEHOLD_RESPONSE',
    ADD_HOUSEHOLD_REQUEST_COMPLETE = 'ADD_HOUSEHOLD_REQUEST_COMPLETE',
    INVITE_TO_HOUSEHOLD_REQUEST = 'INVITE_TO_HOUSEHOLD_REQUEST',
    INVITE_TO_HOUSEHOLD_REQUEST_COMPLETE = 'INVITE_TO_HOUSEHOLD_REQUEST_COMPLETE',
    ACCEPT_INVITE_TO_HOUSEHOLD = 'ACCEPT_INVITE_TO_HOUSEHOLD',
}

const getHouseholdsOfUser = (getHouseholdsRequest: IGetHouseholdsRequest) =>
    createAction(householdsActionTypes.GET_HOUSEHOLDS_OF_USER_REQUEST, getHouseholdsRequest);

const receiveHouseholdsOfUser = (householdsResponse: IHousehold[]) =>
    createAction(householdsActionTypes.GET_HOUSEHOLDS_OF_USER_RESPONSE, householdsResponse);

const addHousehold = (household: IAddHouseholdRequest) =>
    createAction(householdsActionTypes.ADD_HOUSEHOLD_REQUEST, household);

const receiveHousehold = (addHouseholdResponse: IHousehold) =>
    createAction(householdsActionTypes.ADD_HOUSEHOLD_RESPONSE, addHouseholdResponse);

const addHouseholdComplete = () =>
    createAction(householdsActionTypes.ADD_HOUSEHOLD_REQUEST_COMPLETE);

const inviteToHousehold = (invitiation: IInviteToHouseholdRequest) =>
    createAction(householdsActionTypes.INVITE_TO_HOUSEHOLD_REQUEST, invitiation);

const inviteToHouseholdComplete = () =>
    createAction(householdsActionTypes.INVITE_TO_HOUSEHOLD_REQUEST_COMPLETE);

const acceptInviteToHousehold = (acceptedInvite: IHouseholdAccept) =>
    createAction(householdsActionTypes.ACCEPT_INVITE_TO_HOUSEHOLD, acceptedInvite);

export const HouseholdsActions = {
    getHouseholdsOfUser,
    receiveHouseholdsOfUser,
    addHousehold,
    receiveHousehold,
    addHouseholdComplete,
    inviteToHousehold,
    inviteToHouseholdComplete,
    acceptInviteToHousehold,
};

export type HouseholdsActions = ActionsUnion<typeof HouseholdsActions>;
