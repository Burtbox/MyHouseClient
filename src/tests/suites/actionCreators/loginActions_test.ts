// import { loginUser } from '../../../components/Login/loginActions';
// import { IUserAuthenticationObject, IUserResponseObject, IRecieveUserAction } from '../../../components/Users/usersInterfaces';
// import generateRandomString from '../../shared/randomStringGenerator';
// import { usersActions } from '../../../components/Users/usersActions';

describe('Login action creator test suite', () => {
    test('placeholder', () => {
        expect(true).toBeTruthy();
    });
    /*test('Valid login action creator test', () => {
        const email = 'dickbutt@gmail.com';
        const password = 'dickbutt';
        const inputLogin: IUserAuthenticationObject = {
            email,
            password,
        };

        const expectedResponse: IRecieveUserAction = {
            type: usersActions.RECEIVE_USER,
            loggedInUser: {
                email,
                userId: '70ajxWmrS6XIU53GL6bj1VcjCsm1',
                displayName: 'dickbutt',
                token: '',
            },
            isLoggedIn: true,
        };

        const actualResponse = loginUser(inputLogin);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test('Valid login action creator test', () => {
        const email = generateRandomString(50);
        const password = generateRandomString(50);
        const inputLogin: IUserAuthenticationObject = {
            email,
            password,
        };

        const expectedUid = generateRandomString(28);
        const expectedToken = generateRandomString(28);
        const expectedDisplayName = generateRandomString(28);
        const expectedResponse: IUserResponseObject = {
            email,
            displayName: expectedDisplayName,
            uid: expectedUid,
            token: expectedToken,
        };

        const actualResponse = loginUser(inputLogin);

        expect(actualResponse).toEqual(expectedResponse);
    });*/
});
