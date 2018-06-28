import { History } from 'history';
import { Action, Dispatch } from 'redux';
import { ILoadingStore } from '../components/Loading/loadingInterfaces';
import { ILoggedInUser } from '../components/Users/usersInterfaces';

export interface IComponentProps {
    dispatch: Dispatch<Action>;
    history: History;
}

export interface IConnectedComponentProps extends ILoggedInUser, ILoadingStore { }
