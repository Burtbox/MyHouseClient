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
import { HouseholdsActions, householdsActionTypes } from './householdsActions';
import { IAcceptInviteToHouseholdRequest } from './householdsInterfaces';

const acceptInviteToHouseholdRequestEpic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType<ActionWithPayload<householdsActionTypes.ACCEPT_INVITE_TO_HOUSEHOLD_REQUEST, IAcceptInviteToHouseholdRequest>>(
            householdsActionTypes.ACCEPT_INVITE_TO_HOUSEHOLD_REQUEST),
        switchMap((params) => {
            const ajaxParams: AjaxCallParams = {
                token: params.payload.token,
                method: HTTPMethod.POST,
                endpoint: endpoints.occupants,
                body: params.payload.acceptInviteDetails,
            };
            return ajaxObservable<number>(ajaxParams).pipe(
                mergeMap(response => of(
                    HouseholdsActions.acceptInviteToHouseholdComplete(),
                    LoadingActions.loadingComplete(),
                )),
            );
        },
        ),
    );
};

export default acceptInviteToHouseholdRequestEpic;
