import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { IRoutesProps } from './routesInterfaces';
import { myHouseRoutes } from '../../enums/routesEnum';
import Login from '../Login';
import Register from '../Register';
import Links from '../Links';
import MyAccount from '../MyAccount';
import ChangePassword from '../ChangePassword';
import NotFound404 from '../NotFound404';
import Households from '../Households';
import { IStore } from '../../interfaces/storeInterface';
import { checkAuthorization } from '../Users/usersActions';
import { IUserObject } from '../Users/usersInterfaces';

export class Routes extends React.Component<IRoutesProps> {
    getRoutes() {
        checkAuthorization(this.props.loggedInUser);
        let routes: JSX.Element;
        if (this.props.isLoggedIn) {
            routes = (
                <Switch>
                    <Route exact path={myHouseRoutes.Base} component={Links} />
                    <Route path={myHouseRoutes.Links} component={Links} />
                    <Route path={myHouseRoutes.Households} component={Households} />
                    <Route path={myHouseRoutes.MyAccount} component={MyAccount} />
                    <Route path={myHouseRoutes.ChangePassword} component={ChangePassword} />
                    <Route exact path={myHouseRoutes.Unknown} component={NotFound404} />
                </Switch>
            );
        } else {
            routes = (
                <Switch>
                    <Route exact path={myHouseRoutes.Base} component={Login} />
                    <Route path={myHouseRoutes.Login} component={Login} />
                    <Route path={myHouseRoutes.Register} component={Register} />
                    <Route exact path={myHouseRoutes.Unknown} component={NotFound404} />
                </Switch>
            );
        }
        return routes;
    }

    render() {
        return <Route>{this.getRoutes()}</Route>;
    }
}

const mapStateToProps = (store: IStore) => {
    const isLoggedIn: boolean = store.usersReducer.isLoggedIn ? store.usersReducer.isLoggedIn : false;
    const loggedInUser: IUserObject = store.usersReducer.loggedInUser ? store.usersReducer.loggedInUser : null;
    const props: IRoutesProps = {
        isLoggedIn,
        loggedInUser,
    };
    return props;
};

const ConnectedRoutes = withRouter(connect(mapStateToProps)(Routes));
export default ConnectedRoutes;
