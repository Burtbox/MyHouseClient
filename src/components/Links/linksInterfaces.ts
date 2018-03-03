import { IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IUserObject } from '../Users/usersInterfaces';
import { IHousehold } from '../Households/householdsInterfaces';

export interface ILinksStore {
    households: IHousehold[];
    loggedInUser: IUserObject;
}

export interface ILinksProps extends IConnectedComponentProps {
    households: IHousehold[];
}

export interface ILinksState {
    loading: boolean;
}
