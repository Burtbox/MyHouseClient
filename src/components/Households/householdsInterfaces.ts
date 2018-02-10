import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { Action } from 'redux';
import { IUserObject } from '../Users/usersInterfaces';

export interface IHousehold {
    householdId: number;
    name: string;
}

export interface IHouseholdProps extends IConnectedComponentProps {
    households: IHousehold[];
}

export interface IHouseholdsAction extends Action {
    households: IHousehold[];
}

export interface IHouseholdStore {
    households: IHousehold[];
    loggedInUser: IUserObject;
}

export interface IHouseholdState {
    loading: boolean;
}
