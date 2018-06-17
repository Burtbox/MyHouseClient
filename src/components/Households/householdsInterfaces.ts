import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { ILoggedInUser } from '../Users/usersInterfaces';

export interface IHousehold {
    occupantId: number;
    name: string;
}

export interface IHouseholdsProps extends IComponentProps, IConnectedComponentProps, IHouseholdsStore { }

export interface IHouseholdsStore extends IHouseholdsReducer, ILoadingReducer, ILoggedInUser { }

export interface IHouseholdsReducer {
    householdsArray: IHousehold[];
}
