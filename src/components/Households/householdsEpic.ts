import * as queryString from 'query-string';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { endpoints } from '../../enums/endpointsEnum';
import { HTTPMethod } from '../../enums/httpEnum';
import { ActionWithPayload } from '../../helpers/actionCreator';
import ajaxObservable from '../../helpers/ajaxHelper';
import { AjaxCallParams } from '../../interfaces/apiInterfaces';
import { IGetHouseholdsRequest } from '../AddHousehold/addHouseholdInterfaces';
import { LoadingActions } from '../Loading/loadingActions';
import { HouseholdsActions, householdsActionTypes } from './householdsActions';
import { IHousehold } from './householdsInterfaces';

const getHouseholdsOfUserRequestEpic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType<ActionWithPayload<householdsActionTypes.GET_HOUSEHOLDS_OF_USER_REQUEST, IGetHouseholdsRequest>>(
            householdsActionTypes.GET_HOUSEHOLDS_OF_USER_REQUEST),
        switchMap((params) => {
            const urlParams = queryString.stringify({
                userId: params.payload.userId,
                includeInvites: params.payload.includeInvites,
            });
            const addTransactionAjaxParams: AjaxCallParams = {
                urlParams,
                token: params.payload.token,
                method: HTTPMethod.GET,
                endpoint: endpoints.households,
            };
            return ajaxObservable<IHousehold[]>(addTransactionAjaxParams).pipe(
                mergeMap((response: IHousehold[]) => of(
                    HouseholdsActions.receiveHouseholdsOfUser(response),
                    HouseholdsActions.addHouseholdComplete(),
                    LoadingActions.loadingComplete(),
                )),
            );
        },
        ),
    );
};

export default getHouseholdsOfUserRequestEpic;
