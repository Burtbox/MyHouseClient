import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { Action } from 'redux';
import { IOccupant } from '../../interfaces/occupantsInterfaces';

export interface IHousehold {
    householdId: number;
    name: string;
}

export interface IHouseholdProps extends IConnectedComponentProps {
    households: IHousehold[];
    loading: boolean;
}

export interface IHouseholdsAction extends Action {
    households: IHousehold[];
}

export interface IHouseholdStore {
    households: IHousehold[];
    loggedInUser: IOccupant;
    loading: boolean;
}
