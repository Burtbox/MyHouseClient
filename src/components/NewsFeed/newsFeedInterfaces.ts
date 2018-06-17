import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IHouseholdsReducer } from '../Households/householdsInterfaces';

export interface INewsFeed {
    newsFeedId: number;
    householdId: number;
    headline: string;
    subHeadline: string;
    story: string;
    author: string;
}

export interface INewsFeedProps extends INewsFeedStore, IComponentProps { }

export interface INewsFeedReducer {
    newsFeedList: INewsFeed[];
}

export interface INewsFeedStore extends IConnectedComponentProps, IHouseholdsReducer, INewsFeedReducer { }
