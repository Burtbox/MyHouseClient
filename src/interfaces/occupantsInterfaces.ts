import { IUserObject } from './userInterfaces';

export interface IOccupant extends IUserObject {
    householdId: number;
    occupantId: number;
    token: string;
}

export interface IOccupantProps { }
