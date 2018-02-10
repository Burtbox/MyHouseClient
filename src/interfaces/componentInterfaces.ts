import { Dispatch } from 'redux';
import { History } from 'history';
import { IOccupant } from '../components/Occupants/occupantsInterfaces'; // TODO: Sort out what a user needs to look like!

export interface IComponentProps {
    dispatch: Dispatch<Function>;
    history: History;
}

export interface IConnectedComponentProps extends IComponentProps {
    loggedInUser: IOccupant;
    isLoggedIn: boolean;
}
