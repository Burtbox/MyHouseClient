import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { Action } from 'redux';

export interface IHousehold {
    householdId: number;
    name: string;
}

export interface IHouseholdProps extends IConnectedComponentProps {
    households: IHousehold[];
}

export interface IHouseholdsState {

}

export interface IHouseholdsAction extends Action {
    households: IHousehold[];
}
