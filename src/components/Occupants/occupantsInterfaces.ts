import { IUserObject } from '../Users/usersInterfaces';

export interface IOccupant extends IUserObject {
    householdId: number;
    occupantId: number;
}

export interface IOccupantProps { }
