import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { endpoints } from '../../enums/endpointsEnum';
import { HTTPMethod } from '../../enums/httpEnum';
import { myHouseRoutes } from '../../enums/routesEnum';
import { ActionWithPayload } from '../../helpers/actionCreator';
import ajaxObservable from '../../helpers/ajaxHelper';
import { AjaxCallParams } from '../../interfaces/apiInterfaces';
import history from '../../main/history';
import { HouseholdsActions, householdsActionTypes } from '../Households/householdsActions';
import { IHousehold } from '../Households/householdsInterfaces';
import { LoadingActions } from '../Loading/loadingActions';
import { IAddHouseholdRequest } from './addHouseholdInterfaces';

const addHouseholdRequestEpic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType<ActionWithPayload<householdsActionTypes.ADD_HOUSEHOLD_REQUEST, IAddHouseholdRequest>>(
            householdsActionTypes.ADD_HOUSEHOLD_REQUEST),
        switchMap((params) => {
            const ajaxParams: AjaxCallParams = {
                token: params.payload.token,
                method: HTTPMethod.POST,
                endpoint: endpoints.households,
                body: params.payload.household,
            };
            return ajaxObservable<IHousehold>(ajaxParams).pipe(
                mergeMap(response => of(
                    HouseholdsActions.receiveHousehold(response),
                    LoadingActions.loadingComplete(),
                    history.push(myHouseRoutes.Households),
                )),
            );
        },
        ),
    );
};

export default addHouseholdRequestEpic;
