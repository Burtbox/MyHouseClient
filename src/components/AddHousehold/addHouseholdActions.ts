import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { IHousehold } from '../Households/householdsInterfaces';
import { IAddHouseholdRequest } from './addHouseholdInterfaces';

export enum addHouseholdActionTypes {
    ADD_HOUSEHOLD_REQUEST = 'ADD_HOUSEHOLD_REQUEST',
    ADD_HOUSEHOLD_RESPONSE = 'ADD_HOUSEHOLD_RESPONSE',
}

const addHousehold = (household: IAddHouseholdRequest) =>
    createAction(addHouseholdActionTypes.ADD_HOUSEHOLD_REQUEST, household);

const receiveHousehold = (addHouseholdResponse: IHousehold) =>
    createAction(addHouseholdActionTypes.ADD_HOUSEHOLD_RESPONSE, addHouseholdResponse);

export const AddHouseholdActions = {
    addHousehold,
    receiveHousehold,
};

export type AddHouseholdActions = ActionsUnion<typeof AddHouseholdActions>;
