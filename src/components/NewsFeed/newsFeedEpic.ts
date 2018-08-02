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
import { LoadingActions } from '../Loading/loadingActions';
import { IUserDetails } from '../Users/usersInterfaces';
import { NewsFeedActions, newsFeedsActionTypes } from './newsFeedActions';
import { INewsFeed } from './newsFeedInterfaces';

const newsFeedRequestEpic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType<ActionWithPayload<newsFeedsActionTypes.GET_NEWSFEEDS_OF_USER_REQUEST, IUserDetails>>(
            newsFeedsActionTypes.GET_NEWSFEEDS_OF_USER_REQUEST),
        switchMap((params) => {
            const urlParams = queryString.stringify({ userId: params.payload.userId });
            const ajaxParams: AjaxCallParams = {
                urlParams,
                token: params.payload.token,
                method: HTTPMethod.GET,
                endpoint: endpoints.newsFeeds,
            };
            return ajaxObservable<INewsFeed[]>(ajaxParams).pipe(
                mergeMap((response: INewsFeed[]) => of(
                    NewsFeedActions.receiveNewsFeed(response),
                    LoadingActions.loadingComplete(),
                )),
            );
        },
        ),
    );
};

export default newsFeedRequestEpic;
