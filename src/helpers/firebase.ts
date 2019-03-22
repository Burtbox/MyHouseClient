import * as firebase from 'firebase';
import { firebaseConfig } from '../appConfig';

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;

export const isAuthenticated = () => {
    return !!auth.currentUser;
};
