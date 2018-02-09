import apiHelper from '../../helpers/apiHelper';
import { ADD_ERROR } from '../ErrorMessage/errorMessageActions';
import { IOccupant } from '../../interfaces/occupantsInterfaces';
import { HTTPMethod } from '../../enums/httpEnum';
import { IHousehold } from './householdsInterfaces';
import { HouseholdsActions } from '../../enums/householdsActionsEnum';

export const GET_HOUSEHOLDS_OF_OCCUPANT_STARTED = HouseholdsActions.GET_HOUSEHOLDS_OF_OCCUPANT_STARTED;
export const GET_HOUSEHOLDS_OF_OCCUPANT_COMPLETED = HouseholdsActions.GET_HOUSEHOLDS_OF_OCCUPANT_COMPLETED;
export const HOUSEHOLDS_OF_OCCUPANT = HouseholdsActions.HOUSEHOLDS_OF_OCCUPANT;

export function getHouseholdsOfOccupant(token: string, occupant: IOccupant) {
    const request = apiHelper.apiCall(HTTPMethod.GET, 'Households/', token, null, occupant.userId);

    return (dispatch: Function) => {
        dispatch(getHouseholdsOfOccupantStarted());
        return request
            .then((response: IHousehold[]) => {
                dispatch(getHouseholdsOfOccupantSuccessful(response));
                dispatch(getHouseholdsOfOccupantAttemptComplete());
            })
            .catch((error: Error) => {
                dispatch(getHouseholdsOfOccupantFailure(error));
                dispatch(getHouseholdsOfOccupantAttemptComplete());
                throw error;
            });
    };
}

function getHouseholdsOfOccupantStarted() {
    return {
        type: GET_HOUSEHOLDS_OF_OCCUPANT_STARTED,
    };
}

function getHouseholdsOfOccupantSuccessful(response: IHousehold[]) {
    return {
        type: HOUSEHOLDS_OF_OCCUPANT,
        households: response,
    };
}

function getHouseholdsOfOccupantFailure(error: Error) {
    return {
        type: ADD_ERROR,
        payload: error.message,
    };
}

function getHouseholdsOfOccupantAttemptComplete() {
    return {
        type: GET_HOUSEHOLDS_OF_OCCUPANT_COMPLETED,
    };
}
