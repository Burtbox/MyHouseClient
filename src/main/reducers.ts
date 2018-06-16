import { AnyAction, combineReducers, Reducer } from 'redux';
import errorMessageReducer from '../components/ErrorMessage/errorMessageReducer';
import householdsReducer from '../components/Households/householdsReducer';
import linksReducer from '../components/Links/linksReducer';
import loadingReducer from '../components/Loading/loadingReducer';
import loginReducer from '../components/Login/loginReducer';
import logoutReducer from '../components/Logout/logoutReducer';
import myAccountReducer from '../components/MyAccount/myAccountReducer';
import registerReducer from '../components/Register/registerReducer';
import usersReducer from '../components/Users/usersReducer';
import { IStore } from '../interfaces/storeInterface';


const combinedReducers: Reducer<IStore, AnyAction> = combineReducers({
    usersReducer,
    errorMessageReducer,
    loginReducer,
    registerReducer,
    myAccountReducer,
    householdsReducer,
    linksReducer,
    loadingReducer,
    logoutReducer,
});

export default combinedReducers;
