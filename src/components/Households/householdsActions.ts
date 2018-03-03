import apiHelper from '../../helpers/apiHelper';
import { addError } from '../ErrorMessage/errorMessageActions';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { HTTPMethod } from '../../enums/httpEnum';
import { IHousehold, IHouseholdsAction } from './householdsInterfaces';
import { IAsyncAction } from '../../interfaces/apiInterfaces';
import { endpoints } from '../../enums/endpointsEnum';

export enum HouseholdsActions {
    GET_HOUSEHOLDS_OF_USER_STARTED = 'GET_HOUSEHOLDS_OF_USER_STARTED',
    GET_HOUSEHOLDS_OF_USER_COMPLETED = 'GET_HOUSEHOLDS_OF_USER_STARTED',
    HOUSEHOLDS_OF_USER = 'HOUSEHOLDS_OF_USER',
}

export function getHouseholdsOfUser(token: string, occupant: IOccupant) {
    const request = apiHelper.apiCall(HTTPMethod.GET, endpoints.households, token, occupant.userId);

    return (dispatch: Function) => {
        dispatch(getHouseholdsOfOccupantStarted());
        return request
            .then((response: IHousehold[]) => {
                dispatch(getHouseholdsOfOccupantSuccessful(response));
                dispatch(getHouseholdsOfOccupantAttemptComplete());
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                dispatch(getHouseholdsOfOccupantAttemptComplete());
                throw error;
            });
    };
}

function getHouseholdsOfOccupantStarted() {
    const response : IAsyncAction = {
        type: HouseholdsActions.GET_HOUSEHOLDS_OF_USER_STARTED,
        loading: true,
    };
    return response;
}

function getHouseholdsOfOccupantSuccessful(householdsResponse: IHousehold[]) {
    const response: IHouseholdsAction = {
        type: HouseholdsActions.HOUSEHOLDS_OF_USER,
        households: householdsResponse,
    };
    return response;
}

function getHouseholdsOfOccupantAttemptComplete() {
    const response : IAsyncAction = {
        type: HouseholdsActions.GET_HOUSEHOLDS_OF_USER_COMPLETED,
        loading: false,
    };
    return response;
}
