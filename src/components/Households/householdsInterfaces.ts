import { Action } from 'redux';
import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { IUserObject } from '../Users/usersInterfaces';

export interface IHousehold {
    occupantId: number;
    name: string;
}

export interface IHouseholdsReducer extends IConnectedComponentProps, IHouseholdsStore { }

export interface IHouseholdsAction extends Action, IHouseholdsReducer { }

export interface IHouseholdsStore extends IHouseholdsReducer, ILoadingReducer {
    loggedInUser: IUserObject;
}

export interface IHouseholdsReducer {
    householdsArray: IHousehold[];
}
