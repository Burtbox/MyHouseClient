import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import { IGetHouseholdsRequest } from '../AddHousehold/addHouseholdInterfaces';
import Loading from '../Loading';
import { HouseholdsActions } from './householdsActions';
import { IHouseholdsProps, IHouseholdsStore } from './householdsInterfaces';
import HouseholdsList from './HouseholdsList';

export class Households extends React.Component<IHouseholdsProps> {
    componentDidMount() {
        const userDetails: IGetHouseholdsRequest = {
            token: this.props.loggedInUser.token,
            userId: this.props.loggedInUser.userId,
            includeUnaccpeted: true,
        };
        this.props.dispatch(HouseholdsActions.getHouseholdsOfUser(userDetails));
    }

    render() {
        return (
            <form className={this.props.classes.container}>
                <div style={{ display: 'inline-flex', width: '100%', padding: '2em' }}>
                    {!this.props.loading && this.props.householdsArray && this.props.householdsArray.length > 0
                        ? <HouseholdsList
                            householdsArray={this.props.householdsArray}
                            loading={this.props.loading}
                            loggedInUser={this.props.loggedInUser}
                            dispatch={this.props.dispatch}
                            history={this.props.history}
                        />
                        : this.props.householdsArray.length === 0
                            ? <Typography variant="subheading">
                                You currently don't have any households <p />
                                Click Add Household to create a new household and invite people <p />
                                Or ask for an invite to an existing household
                            </Typography>
                            : <Loading />
                    }
                </div >
            </form>
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

export default compose(withStyles(formStyles), connect(mapStateToProps))(Households);
