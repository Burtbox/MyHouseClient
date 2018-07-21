import { IUser } from '../Users/usersInterfaces';

export interface IOccupant extends IUser {
    occupantId: number;
}

export interface IOccupantProps { }

export interface IOccupantUpdate {
    inviteAccepted: boolean;
    displayName: string;
    userId: string;
    occupantId: number;
}

export interface IOccupantUpdateRequest {
    occupant: IOccupantUpdate;
    token: string;
}
