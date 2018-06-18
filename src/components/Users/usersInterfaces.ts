
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
    uid: string;
    token: string;
    email: string;
    displayName: string;
}

export interface IUsersReducer extends ILoggedInUser {
    isLoggedIn: boolean;
}

export interface ILoggedInUser {
    loggedInUser: IUser;
}
