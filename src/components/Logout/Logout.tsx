import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import * as queryString from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import appStyles from '../../styles';
import { logoutUser } from './logoutActions';
import { ILogoutDetails, ILogoutProps, ILogoutState, LogoutReason } from './logoutInterfaces';

export class Logout extends React.Component<ILogoutProps, ILogoutState> {
    constructor(props: ILogoutProps) {
        super(props);
        this.state = {
            loading: false,
        };
    }

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
        }
        return logoutMessage;
    }

    handleLogout = () => {
        this.setState({ loading: true });
        this.props.dispatch(logoutUser()).then(this.setState({ loading: false }));
    }

    // TODO: refactor this into stateless components
    render() {
        return (
            <form style={appStyles.container}>
                {this.hasLogoutDetails() ? <h2>{this.logoutMessage()}</h2> : <h2> See You Space Cowboy... </h2>}
                <div>
                    {this.state.loading && this.hasLogoutDetails() ? (
                        <CircularProgress />
                    ) : (
                            <FlatButton label="Continue" onClick={() => this.props.history.push(myHouseRoutes.Login)} />
                        )}
                </div>
            </form>
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    return {
        loggingOut: store.logoutReducer.loggingOut,
    };
};

export default connect(mapStateToProps)(Logout);
