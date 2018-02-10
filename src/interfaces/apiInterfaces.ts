import { Action } from 'redux';

export interface ICustomApiHeaders {
    'Content-Type': String;
    'Authorization': String;
}

export interface IAsyncAction extends Action {
    loading: boolean;
}
