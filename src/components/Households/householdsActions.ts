import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { IUserDetails } from '../Users/usersInterfaces';
import { IHousehold } from './householdsInterfaces';

export enum householdsActionTypes {
    GET_HOUSEHOLDS_OF_USER_REQUEST = 'GET_HOUSEHOLDS_OF_USER_REQUEST',
    GET_HOUSEHOLDS_OF_USER_RESPONSE = 'GET_HOUSEHOLDS_OF_USER_RESPONSE',
}

const getHouseholdsOfUser = (userDetails: IUserDetails) =>
    createAction(householdsActionTypes.GET_HOUSEHOLDS_OF_USER_REQUEST, userDetails);

const receiveHouseholdsOfUser = (householdsResponse: IHousehold[]) =>
    createAction(householdsActionTypes.GET_HOUSEHOLDS_OF_USER_RESPONSE, householdsResponse);

export const HouseholdsActions = {
    getHouseholdsOfUser,
    receiveHouseholdsOfUser,
};

export type HouseholdsActions = ActionsUnion<typeof HouseholdsActions>;
