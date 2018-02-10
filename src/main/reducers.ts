import { combineReducers, Reducer } from 'redux';

import usersReducer from '../components/Users/usersReducer';
import errorMessageReducer from '../components/ErrorMessage/errorMessageReducer';
import loginReducer from '../components/Login/loginReducer';
import registerReducer from '../components/Register/registerReducer';
import myAccountReducer from '../components/MyAccount/myAccountReducer';
import householdsReducer from '../components/Households/householdsReducer';

const combinedReducers: Reducer<Function> = combineReducers({
    usersReducer,
    errorMessageReducer,
    loginReducer,
    registerReducer,
    myAccountReducer,
    householdsReducer,
});

export default combinedReducers;
