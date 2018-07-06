import * as firebase from 'firebase';
import { uiConfig } from 'react-firebaseui';

const config = {
    apiKey: 'AIzaSyA27cRAIaX6NqiLQ4_AHNB91MlHajiTplA', // TODO: Store as not plain text!
    authDomain: 'myhouse-a01c7.firebaseapp.com',
    databaseURL: 'https://myhouse-a01c7.firebaseio.com',
    projectId: 'myhouse-a01c7',
    storageBucket: 'myhouse-a01c7.appspot.com',
    messagingSenderId: '1081028595369',
};

const firebaseApp: firebase.app.App = firebase.initializeApp(config);

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
