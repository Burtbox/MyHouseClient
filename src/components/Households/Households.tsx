import * as React from 'react';
import Paper from 'material-ui/Paper';
import { IHouseholdProps, IHouseholdStore, IHousehold, IHouseholdState } from './householdsInterfaces';
import { getHouseholdsOfUser } from './householdsActions';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { IStore } from '../../interfaces/storeInterface';
import { CircularProgress } from 'material-ui';

class Households extends React.Component<IHouseholdProps, IHouseholdState> {
    constructor(props: IHouseholdProps) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentWillMount() {
        this.setState({ loading: true });
        this.props.dispatch(
            getHouseholdsOfUser(this.props.loggedInUser.token, this.props.loggedInUser),
        ).then(() => {
            this.setState({ loading: false });
        });
    }

    createHouseholdsList() {
        return (
            <Paper>
                <List>
                    {this.props.households.map((household: IHousehold) => {
                        <ListItem primaryText={household.householdId} />;
                    })}
                </List>
            </Paper>
        );
    }

    render() {
        return (
            <div style={{ display: 'block' }}>
                {this.state.loading && this.props.households && this.props.households.length
                    ? this.createHouseholdsList()
                    : <CircularProgress />}
            </div >
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    const props: IHouseholdStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        households: store.householdsReducer.households,
    };
    return props;
};

export default connect(mapStateToProps)(Households);
