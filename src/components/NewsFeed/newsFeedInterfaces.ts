import { Action } from 'redux';

export interface INewsFeed {
    newsFeedId: number;
    householdId: number;
    headline: string;
    subHeadline: string;
    story: string;
    author: string;
}

export interface INewsFeedsAction extends Action, INewsFeedProps { }

export interface INewsFeedProps {
    newsFeedList: INewsFeed[];
}
