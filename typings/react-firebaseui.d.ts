declare module 'react-firebaseui' {
    import * as firebase from "firebase";
    export interface uiConfig {
        signInFlow: 'popup' | 'redirect';
        signInSuccessUrl: string;
        signInOptions: string[];
    }
    export interface StyledFirebaseAuthProps {
        uiConfig: uiConfig;
        firebaseAuth: firebase.auth.Auth;
    }

    export const StyledFirebaseAuth: React.ComponentType<StyledFirebaseAuthProps>;
}
