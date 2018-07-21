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
import { OccupantsActions, occupantsActionTypes } from './occupantsActions';
import { IOccupantUpdateRequest } from './occupantsInterfaces';

const updateOccupantRequestEpic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType<ActionWithPayload<occupantsActionTypes.UPDATE_OCCUPANT_REQUEST, IOccupantUpdateRequest>>(
            occupantsActionTypes.UPDATE_OCCUPANT_REQUEST),
        switchMap((params) => {
            const ajaxParams: AjaxCallParams = {
                token: params.payload.token,
                method: HTTPMethod.PUT,
                endpoint: endpoints.occupants,
                body: params.payload.occupant,
            };
            return ajaxObservable<number>(ajaxParams).pipe(
                mergeMap(response => of(
                    OccupantsActions.updateOccupantComplete(),
                    LoadingActions.loadingComplete(),
                )),
            );
        },
        ),
    );
};

export default updateOccupantRequestEpic;
