import { AnyAction, combineReducers, Reducer } from 'redux';
import errorMessageReducer from '../components/ErrorMessage/errorMessageReducer';
import householdsReducer from '../components/Households/householdsReducer';
import loadingReducer from '../components/Loading/loadingReducer';
import loginReducer from '../components/Login/loginReducer';
import logoutReducer from '../components/Logout/logoutReducer';
import navReducer from '../components/Nav/navReducer';
import newsFeedReducer from '../components/NewsFeed/newsFeedReducer';
import registerReducer from '../components/Register/registerReducer';
import usersReducer from '../components/Users/usersReducer';
import { IStore } from '../interfaces/storeInterface';

const combinedReducers: Reducer<IStore, AnyAction> = combineReducers({
    usersReducer,
    errorMessageReducer,
    loginReducer,
    registerReducer,
    householdsReducer,
    newsFeedReducer,
    loadingReducer,
    logoutReducer,
    navReducer,
});

export default combinedReducers;
