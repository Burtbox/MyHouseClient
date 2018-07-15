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
import { IInviteToHouseholdRequest } from './householdsInterfaces';

const inviteToHouseholdRequestEpic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType<ActionWithPayload<householdsActionTypes.INVITE_TO_HOUSEHOLD_REQUEST, IInviteToHouseholdRequest>>(
            householdsActionTypes.INVITE_TO_HOUSEHOLD_REQUEST),
        switchMap((params) => {
            const ajaxParams: AjaxCallParams = {
                token: params.payload.token,
                method: HTTPMethod.POST,
                endpoint: endpoints.occupantInvite,
                body: params.payload.inviteDetails,
            };
            return ajaxObservable<number>(ajaxParams).pipe(
                mergeMap(response => of(
                    HouseholdsActions.inviteToHouseholdComplete(),
                    LoadingActions.loadingComplete(),
                )),
            );
        },
        ),
    );
};

export default inviteToHouseholdRequestEpic;
