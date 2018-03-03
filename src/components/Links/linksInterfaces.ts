import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IUserObject } from '../Users/usersInterfaces';
import { IHousehold } from '../Households/householdsInterfaces';
import { Action } from 'redux';

export interface ILinksStore {
    households: IHousehold[];
    loggedInUser: IUserObject;
}

export interface ILinksProps extends IConnectedComponentProps {
    households: IHousehold[];
    newsFeed: INewsFeed[];
}

export interface INewsFeed {
    newsFeedId: number;
    householdId: number;
    headline: string;
    subHeadline: string;
    story: string;
    author: string;
}

export interface ILinksState {
    householdsLoading: boolean;
    newsFeedLoading: boolean;
}
export interface INewsFeedsAction extends Action {
    newsFeed: INewsFeed[];
}
