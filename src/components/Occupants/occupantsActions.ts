import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { IOccupantUpdateRequest } from './occupantsInterfaces';

export enum occupantsActionTypes {
    UPDATE_OCCUPANT_REQUEST = 'UPDATE_OCCUPANT_REQUEST',
    UPDATE_OCCUPANT_REQUEST_COMPLETE = 'UPDATE_OCCUPANT_REQUEST_COMPLETE',
}

const updateOccupant = (occupant: IOccupantUpdateRequest) =>
    createAction(occupantsActionTypes.UPDATE_OCCUPANT_REQUEST, occupant);

const updateOccupantComplete = () =>
    createAction(occupantsActionTypes.UPDATE_OCCUPANT_REQUEST_COMPLETE);

export const OccupantsActions = {
    updateOccupant,
    updateOccupantComplete,
};

export type OccupantsActions = ActionsUnion<typeof OccupantsActions>;
