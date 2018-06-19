import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';

export interface INewsFeed {
    newsFeedId: number;
    householdId: number;
    headline: string;
    subHeadline: string;
    story: string;
    author: string;
    // TODO: Add date to this!
}

export interface INewsFeedProps extends INewsFeedStore, IComponentProps { }

export interface INewsFeedReducer {
    newsFeedList: INewsFeed[];
}

export interface INewsFeedStore extends IConnectedComponentProps, INewsFeedReducer { }
