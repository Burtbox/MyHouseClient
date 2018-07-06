import { IUserResponseObject } from '../../components/Users/usersInterfaces';

class auth {
    signInWithEmailAndPassword(email: string, password: string) {
        const response: IUserResponseObject = {
            userId: 'UnitTestUid',
            email: 'Unit@Test.com',
            displayName: 'Unit Test Display Name',
            token: 'UnitTestToken',
        };
        return response;
    }
}

export default auth;
