import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { IRoutesProps, IRoutesState } from './interfaces';

import Login from '../Login';
import Register from '../Register';
import Links from '../Links';
import MyAccount from '../MyAccount';
import ChangePassword from '../ChangePassword';
import NotFound404 from '../NotFound404';
import Households from '../Households';

class Routes extends React.Component<IRoutesProps, IRoutesState> {
    getRoutes() {
        let routes: JSX.Element;
        if (this.props.isLoggedIn) {
            routes = (
                <Switch>
                    <Route exact path="/" component={Links} />
                    <Route path="/Links" component={Links} />
                    <Route path="/Households" component={Households} />
                    <Route path="/MyAccount" component={MyAccount} />
                    <Route path="/ChangePassword" component={ChangePassword} />
                    <Route exact path="*" component={NotFound404} />
                </Switch>
            );
        } else {
            routes = (
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route exact path="*" component={NotFound404} />
                </Switch>
            );
        }
        return routes;
    }

    render() {
        return <Route>{this.getRoutes()}</Route>;
    }
}

const mapStateToProps = (store: any) => {
    return {
        isLoggedIn: store.navReducer.isLoggedIn,
    };
};

const ConnectedRoutes = withRouter(connect(mapStateToProps)(Routes));
export default ConnectedRoutes;
