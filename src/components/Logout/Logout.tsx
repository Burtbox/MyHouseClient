import * as React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import appStyles from '../../styles';
import { ILogoutProps, ILogoutState } from './logoutInterfaces';
import { logoutUser } from './logoutActions';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';

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

    handleLogout = () => {
        this.setState({ loading: true });
        this.props.dispatch(logoutUser()).then(this.setState({ loading: false }));
    }

    // TODO: Accept args in here to tell whether timeout or deliberate logout and change the message accordingly
    // Timeout - you must log in again as timeout
    // Deliberate logout - Only users of shared computers need to logout
    render() {
        return (
            <form style={appStyles.container}>
                <h2>Only users of shared computers need to logout</h2>
                <div>
                    {this.state.loading ? (
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
