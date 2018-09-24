import * as firebase from 'firebase';
import { uiConfig } from 'react-firebaseui';
import { firebaseConfig } from '../appConfig';

const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);

const auth: firebase.auth.Auth = firebaseApp.auth();

export default auth;

export const isAuthenticated = () => {
    return !!auth.currentUser;
};

// Configure FirebaseUI.
export const firebaseUiConfig: uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
    },
    tosUrl: 'http://www.google.com',
};
