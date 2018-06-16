import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { endpoints } from '../../enums/endpointsEnum';
import { HTTPMethod } from '../../enums/httpEnum';
import { ActionWithPayload } from '../../helpers/actionCreator';
import ajaxObservable from '../../helpers/ajaxHelper';
import { AjaxCallParams } from '../../interfaces/apiInterfaces';
import { LoadingActions } from '../Loading/loadingActions';
import { IUserDetails } from '../Users/usersInterfaces';
import { HouseholdsActions, householdsActionTypes } from './householdsActions';
import { IHousehold } from './householdsInterfaces';

const getHouseholdsOfUserRequestEpic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType<ActionWithPayload<householdsActionTypes.GET_HOUSEHOLDS_OF_USER_REQUEST, IUserDetails>>(
            householdsActionTypes.GET_HOUSEHOLDS_OF_USER_REQUEST),
        switchMap((params) => {
            const addTransactionAjaxParams: AjaxCallParams = {
                token: params.payload.token,
                method: HTTPMethod.GET,
                endpoint: endpoints.households,
                urlParams: params.payload.userId,
            };
            return ajaxObservable<IHousehold[]>(addTransactionAjaxParams).pipe(
                mergeMap(response => of(
                    HouseholdsActions.receiveHouseholdsOfUser(response),
                    LoadingActions.loadingComplete(),
                )),
            );
        },
        ),
    );
};

export default getHouseholdsOfUserRequestEpic;
