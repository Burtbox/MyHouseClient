import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { Action } from 'redux';
import { IUserObject } from '../Users/usersInterfaces';

export interface IHousehold {
    householdId: number;
    name: string;
}

export interface IHouseholdsProps extends IConnectedComponentProps {
    households: IHousehold[];
}

export interface IHouseholdsAction extends Action {
    households: IHousehold[];
}

export interface IHouseholdsStore {
    households: IHousehold[];
    loggedInUser: IUserObject;
}

export interface IHouseholdsState {
    loading: boolean;
}
