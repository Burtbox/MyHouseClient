import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import Households from '../Households';
import Login from '../Login';
import Logout from '../Logout';
import NewsFeed from '../NewsFeed';
import NotFound404 from '../NotFound404';
import Register from '../Register';
import { checkAuthorization } from '../Users/usersEpic';
import { IUser } from '../Users/usersInterfaces';
import { IRoutesProps } from './routesInterfaces';

const LoggedInRoutes: React.StatelessComponent = () => {
    return (
        <Switch>
            <Route exact path={myHouseRoutes.Base} component={NewsFeed} />
            <Route path={myHouseRoutes.NewsFeed} component={NewsFeed} />
            <Route path={myHouseRoutes.Households} component={Households} />
            <Route path={myHouseRoutes.Logout} component={Logout} />
            <Route exact path={myHouseRoutes.Unknown} component={NotFound404} />
        </Switch>
    );
};

const LoggedOutRoutes: React.StatelessComponent = () => {
    return (
        <Switch>
            <Route exact path={myHouseRoutes.Base} component={Login} />
            <Route path={myHouseRoutes.Login} component={Login} />
            <Route path={myHouseRoutes.Register} component={Register} />
            <Route path={myHouseRoutes.Logout} component={Logout} />
            <Route exact path={myHouseRoutes.Unknown} component={NotFound404} />
        </Switch>
    );
};

export const Routes: React.StatelessComponent<RouteComponentProps<any> & IRoutesProps> = (props) => {
    checkAuthorization(props.loggedInUser);
    return <Route>{props.isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Route>;
};

const mapStateToProps = (store: IStore) => {
    const isLoggedIn: boolean = store.usersReducer.isLoggedIn ? store.usersReducer.isLoggedIn : false;
    const loggedInUser: IUser = store.usersReducer.loggedInUser ? store.usersReducer.loggedInUser : null;
    const props: IRoutesProps = {
        isLoggedIn,
        loggedInUser,
    };
    return props;
};

const ConnectedRoutes = withRouter(connect(mapStateToProps)(Routes));
export default ConnectedRoutes;
