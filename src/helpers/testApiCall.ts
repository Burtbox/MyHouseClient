import { ajax } from 'rxjs/ajax';
import { ofType } from '../../node_modules/redux-observable';
import { Observable, of } from '../../node_modules/rxjs';
import { catchError, map, mergeMap } from '../../node_modules/rxjs/operators';
import { ErrorMessageActions } from '../components/ErrorMessage/errorMessageActions';
import { HouseholdsActions, householdsActionTypes } from '../components/Households/householdsActions';
import { IInviteToHouseholdRequest } from '../components/Households/householdsInterfaces';
import { LoadingActions } from '../components/Loading/loadingActions';
import { ActionWithPayload } from './actionCreator';

export const testPostErrorHandle = (action$: Observable<string>) => action$.pipe(
    ofType<ActionWithPayload<householdsActionTypes.INVITE_TO_HOUSEHOLD_REQUEST, IInviteToHouseholdRequest>>(
        householdsActionTypes.INVITE_TO_HOUSEHOLD_REQUEST),
    mergeMap(action => ajax.getJSON(`/api/users/${action.payload}`).pipe(
        map(response => HouseholdsActions.inviteToHouseholdComplete()),
        catchError(error => of(
            ErrorMessageActions.addError(error.message),
            LoadingActions.loadingComplete(),
        )),
    )),
);
