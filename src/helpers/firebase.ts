import * as firebase from 'firebase';
import { uiConfig } from 'react-firebaseui';
import { myHouseRoutes } from '../enums/routesEnum';

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
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: myHouseRoutes.NewsFeed,
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};
