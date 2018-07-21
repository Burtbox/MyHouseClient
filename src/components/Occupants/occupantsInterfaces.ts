import { IUser } from '../Users/usersInterfaces';

export interface IOccupant extends IUser {
    occupantId: number;
}

export interface IOccupantProps { }

export interface IOccupantUpdate extends IOccupant {
    acceptInvite: boolean;
}

export interface IOccupantUpdateRequest {
    occupant: IOccupantUpdate;
    token: string;
}
