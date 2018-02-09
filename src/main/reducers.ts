import { combineReducers, Reducer } from 'redux';

import navReducer from '../components/Nav/navReducer';
import errorMessageReducer from '../components/ErrorMessage/errorMessageReducer';
import loginReducer from '../components/Login/loginReducer';
import registerReducer from '../components/Register/registerReducer';
import myAccountReducer from '../components/MyAccount/myAccountReducer';
import householdsReducer from '../components/Households/householdsReducer';

const combinedReducers: Reducer<Function> = combineReducers({
    navReducer,
    errorMessageReducer,
    loginReducer,
    registerReducer,
    myAccountReducer,
    householdsReducer,
});

export default combinedReducers;
