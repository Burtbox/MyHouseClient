import { Dispatch } from 'redux';
import { IOccupant } from '../../interfaces/occupantsInterfaces';
    
export interface INavProps {
    dispatch: Dispatch<{}>;
    loggedInUser: IOccupant;
}

export interface INavState {}
