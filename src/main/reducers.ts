import { combineReducers, Reducer } from 'redux';

import usersReducer from '../components/Users/usersReducer';
import errorMessageReducer from '../components/ErrorMessage/errorMessageReducer';
import loginReducer from '../components/Login/loginReducer';
import registerReducer from '../components/Register/registerReducer';
import myAccountReducer from '../components/MyAccount/myAccountReducer';
import householdsReducer from '../components/Households/householdsReducer';
import linksReducer from '../components/Links/linksReducer';
import { IStore } from '../interfaces/storeInterface';

const combinedReducers: Reducer<IStore> = combineReducers({
    usersReducer,
    errorMessageReducer,
    loginReducer,
    registerReducer,
    myAccountReducer,
    householdsReducer,
    linksReducer,
});

export default combinedReducers;
