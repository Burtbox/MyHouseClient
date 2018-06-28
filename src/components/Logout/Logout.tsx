import { Button, Typography, withStyles } from '@material-ui/core';
import * as queryString from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import Loading from '../Loading';
import { logoutUser } from './logoutEpic';
import { ILogoutDetails, ILogoutProps, LogoutReason } from './logoutInterfaces';

export class Logout extends React.Component<ILogoutProps> {
    componentDidMount() {
        this.handleLogout();
    }

    hasLogoutDetails() {
        let hasLogoutDetails: boolean = false;
        if (this.props.location
            && this.props.location.search
            && this.props.match
            && this.props.match.path === myHouseRoutes.Logout) {
            hasLogoutDetails = true;
        }
        return hasLogoutDetails;
    }

    parseLogoutDetails(logoutDetailsString: string) {
        const parsedLogoutDetails: ILogoutDetails = queryString.parse(logoutDetailsString);
        return parsedLogoutDetails;
    }

    logoutMessage() {
        const logoutDetails: ILogoutDetails = this.parseLogoutDetails(this.props.location.search);
        let logoutMessage: string;
        switch (logoutDetails.logoutReason) {
        case LogoutReason.UserTriggered:
            logoutMessage = 'Only users of shared computers need to logout';
            break;
        case LogoutReason.Timeout:
            logoutMessage = 'You have been timed out and must log in again';
            break;
        default:
            logoutMessage = 'See You Space Cowboy...';
            break;
        }
        return logoutMessage;
    }

    handleLogout() {
        logoutUser(this.props.dispatch);
    }

    render() {
        return (
            <form className={this.props.classes.container}>
                {this.hasLogoutDetails() ?
                    <Typography variant="headline" gutterBottom={true}>{this.logoutMessage()}</Typography> :
                    <div />}
                <div>
                    {this.props.loggingOut && this.hasLogoutDetails() ? (
                        <Loading />
                    ) : (
                            <Button
                                variant="outlined"
                                onClick={() => this.props.history.push(myHouseRoutes.Login)}
                            >
                                Continue
                            </Button>
                        )}
                </div>
            </form>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    return {
        loggingOut: store.logoutReducer.loggingOut,
    };
};

export default compose(withStyles(formStyles), connect(mapStateToProps))(Logout);
