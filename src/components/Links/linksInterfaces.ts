import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IHousehold } from '../Households/householdsInterfaces';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { INewsFeed } from '../NewsFeed/newsFeedInterfaces';
import { IUser } from '../Users/usersInterfaces';

export interface ILinksStore extends LinksBaseProps, ILoadingReducer { }

export interface ILinksReducer extends IConnectedComponentProps, LinksBaseProps, ILoadingReducer { }

export interface ILinksReducer {
    newsFeedList: INewsFeed[];
}

interface LinksBaseProps extends ILinksReducer {
    householdsArray: IHousehold[];
    loggedInUser: IUser;
}
