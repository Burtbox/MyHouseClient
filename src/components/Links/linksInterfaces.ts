import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IUserObject } from '../Users/usersInterfaces';
import { IHousehold } from '../Households/householdsInterfaces';
import { ILoadingProps } from '../Loading/loadingInterfaces';
import { INewsFeed } from '../NewsFeed/newsFeedInterfaces';

export interface ILinksStore extends LinksBaseProps, ILoadingProps { }

export interface ILinksProps extends IConnectedComponentProps, LinksBaseProps, ILoadingProps { }

export interface ILinksReducer {
    newsFeed: INewsFeed[];
}

interface LinksBaseProps extends ILinksReducer {
    households: IHousehold[];
    loggedInUser: IUserObject;
}
