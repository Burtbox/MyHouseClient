import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { Action } from 'redux';
import { IUserObject } from '../Users/usersInterfaces';
import { ILoadingProps } from '../Loading/loadingInterfaces';

export interface IHousehold {
    occupantId: number;
    name: string;
}

export interface IHouseholdsProps extends IConnectedComponentProps, IHouseholdsStore { }

export interface IHouseholdsAction extends Action, IHouseholdsReducer { }

export interface IHouseholdsStore extends IHouseholdsReducer, ILoadingProps {
    loggedInUser: IUserObject;
}

export interface IHouseholdsReducer {
    householdsArray: IHousehold[];
}
