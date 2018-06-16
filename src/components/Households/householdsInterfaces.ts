import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { IUser } from '../Users/usersInterfaces';

export interface IHousehold {
    occupantId: number;
    name: string;
}

export interface IHouseholdsProps extends IConnectedComponentProps, IHouseholdsStore { }

export interface IHouseholdsStore extends IHouseholdsReducer, ILoadingReducer {
    loggedInUser: IUser;
}

export interface IHouseholdsReducer {
    householdsArray: IHousehold[];
}
