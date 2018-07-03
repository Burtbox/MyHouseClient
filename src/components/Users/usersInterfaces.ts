export interface IUserDetails {
    userId: string;
    token: string;
}

export interface IUser extends IUserDetails {
    email: string;
    displayName: string;
}

export interface IUserAuthenticationObject {
    email: string;
    password: string;
}

export interface IUserResponseObject {
    token: string;
    displayName: string;
    email: string;
    uid: string;
}

export interface IUsersReducer extends ILoggedInUser {
    isLoggedIn: boolean;
}

export interface ILoggedInUser {
    loggedInUser: IUser;
}
