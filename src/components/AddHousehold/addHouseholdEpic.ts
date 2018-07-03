import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { endpoints } from '../../enums/endpointsEnum';
import { HTTPMethod } from '../../enums/httpEnum';
import { ActionWithPayload } from '../../helpers/actionCreator';
import ajaxObservable from '../../helpers/ajaxHelper';
import { AjaxCallParams } from '../../interfaces/apiInterfaces';
import { IHousehold } from '../Households/householdsInterfaces';
import { LoadingActions } from '../Loading/loadingActions';
import { IUserDetails } from '../Users/usersInterfaces';
import { AddHouseholdActions, addHouseholdActionTypes } from './addHouseholdActions';

const addHouseholdRequestEpic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType<ActionWithPayload<addHouseholdActionTypes.ADD_HOUSEHOLD_REQUEST, IUserDetails>>(
            addHouseholdActionTypes.ADD_HOUSEHOLD_REQUEST),
        switchMap((params) => {
            const ajaxParams: AjaxCallParams = {
                token: params.payload.token,
                method: HTTPMethod.POST,
                endpoint: endpoints.households,
            };
            return ajaxObservable<IHousehold>(ajaxParams).pipe(
                mergeMap(response => of(
                    AddHouseholdActions.receiveHousehold(response),
                    LoadingActions.loadingComplete(),
                )),
            );
        },
        ),
    );
};

export default addHouseholdRequestEpic;
