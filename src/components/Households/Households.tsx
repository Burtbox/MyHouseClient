import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../interfaces/storeInterface';
import Loading from '../Loading';
import { IUserDetails } from '../Users/usersInterfaces';
import { HouseholdsActions } from './householdsActions';
import { IHouseholdsProps, IHouseholdsStore } from './householdsInterfaces';
import HouseholdsList from './HouseholdsList';

export class Households extends React.Component<IHouseholdsProps> {
    componentDidMount() {
        const userDetails: IUserDetails = this.props.loggedInUser;
        this.props.dispatch(HouseholdsActions.getHouseholdsOfUser(userDetails));
    }

    render() {
        return (
            <div style={{ display: 'inline-flex' }}>
                {!this.props.loading && this.props.householdsArray && this.props.householdsArray.length > 0
                    ? <HouseholdsList householdsArray={this.props.householdsArray} />
                    : <Loading />}
            </div >
        );
    }
}

const mapStateToProps = (store: IStore) => {
    const props: IHouseholdsStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        householdsArray: store.householdsReducer.householdsArray,
        loading: store.loadingReducer.loading,
    };
    return props;
};

export default connect(mapStateToProps)(Households);
