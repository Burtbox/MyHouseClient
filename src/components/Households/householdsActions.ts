import apiHelper from '../../helpers/apiHelper';
import { ADD_ERROR } from '../ErrorMessage/errorMessageActions';
import { IOccupant } from '../../interfaces/occupantsInterfaces';
import { HTTPMethod } from '../../enums/httpEnum';
import { IHousehold, IHouseholdsAction } from './householdsInterfaces';
import { HouseholdsActions } from './householdsActionsEnum';
import { IErrorMessageAction } from '../ErrorMessage/interfaces';
import { IAsyncAction } from '../../interfaces/apiInterfaces';
import { endpoints } from '../../enums/endpointsEnum';

export const GET_HOUSEHOLDS_OF_USER_STARTED = HouseholdsActions.GET_HOUSEHOLDS_OF_USER_STARTED;
export const GET_HOUSEHOLDS_OF_USER_COMPLETED = HouseholdsActions.GET_HOUSEHOLDS_OF_USER_COMPLETED;
export const HOUSEHOLDS_OF_USER = HouseholdsActions.HOUSEHOLDS_OF_USER;

export function getHouseholdsOfUser(token: string, occupant: IOccupant) {
    const request = apiHelper.apiCall(HTTPMethod.GET, endpoints.households, token, null, occupant.userId);

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
    const response : IAsyncAction = {
        type: GET_HOUSEHOLDS_OF_USER_STARTED,
        loading: true,
    };
    return response;
}

function getHouseholdsOfOccupantSuccessful(householdsResponse: IHousehold[]) {
    const response: IHouseholdsAction = {
        type: HOUSEHOLDS_OF_USER,
        households: householdsResponse,
    };
    return response;
}

function getHouseholdsOfOccupantFailure(error: Error) {
    const response: IErrorMessageAction = {
        type: ADD_ERROR,
        errorMessageText: error.message,
    };
    return response;
}

function getHouseholdsOfOccupantAttemptComplete() {
    const response : IAsyncAction = {
        type: GET_HOUSEHOLDS_OF_USER_COMPLETED,
        loading: false,
    };
    return response;
}
