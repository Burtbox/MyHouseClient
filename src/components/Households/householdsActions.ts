import apiHelper from '../../helpers/apiHelper';
import { addError } from '../ErrorMessage/errorMessageActions';
import { HTTPMethod } from '../../enums/httpEnum';
import { IHousehold, IHouseholdsAction } from './householdsInterfaces';
import { endpoints } from '../../enums/endpointsEnum';
import { loadingStarted, loadingComplete } from '../Loading/loadingActions';

export enum HouseholdsActions {
    GET_HOUSEHOLDS_OF_USER_STARTED = 'GET_HOUSEHOLDS_OF_USER_STARTED',
    GET_HOUSEHOLDS_OF_USER_COMPLETED = 'GET_HOUSEHOLDS_OF_USER_STARTED',
    HOUSEHOLDS_OF_USER = 'HOUSEHOLDS_OF_USER',
}

export function getHouseholdsOfUser(token: string, userId: string) {
    const request = apiHelper.apiCall<IHousehold[]>(HTTPMethod.GET, endpoints.households, token, userId);

    return (dispatch: Function) => {
        dispatch(loadingStarted());
        return request
            .then((response: IHousehold[]) => {
                dispatch(receiveHouseholds(response));
                dispatch(loadingComplete());
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                dispatch(loadingComplete());
                throw error;
            });
    };
}

function receiveHouseholds(householdsResponse: IHousehold[]): IHouseholdsAction {
    const response: IHouseholdsAction = {
        type: HouseholdsActions.HOUSEHOLDS_OF_USER,
        households: householdsResponse,
    };
    return response;
}

