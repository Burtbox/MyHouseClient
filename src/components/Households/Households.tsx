import { Snackbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import { IGetHouseholdsRequest } from '../AddHousehold/addHouseholdInterfaces';
import Loading from '../Loading';
import MessageSnackbarContent from '../MessageSnackbarContent';
import { HouseholdsActions } from './householdsActions';
import { IHouseholdsProps, IHouseholdsState, IHouseholdsStore } from './householdsInterfaces';
import HouseholdsList from './HouseholdsList';

export class Households extends React.Component<IHouseholdsProps, IHouseholdsState> {
    constructor(props: IHouseholdsProps) {
        super(props);
        this.state = {
            acceptingInvite: false,
        };
    }

    componentDidMount() {
        const userDetails: IGetHouseholdsRequest = {
            token: this.props.loggedInUser.token,
            userId: this.props.loggedInUser.userId,
            includeInvites: true,
        };
        this.props.dispatch(HouseholdsActions.getHouseholdsOfUser(userDetails));
    }

    componentWillReceiveProps(nextProps: IHouseholdsProps) {
        if (nextProps.acceptingInvite) {
            this.setState({ acceptingInvite: nextProps.acceptingInvite });
        }
    }

    handleInviteAcceptedClose = (event: React.MouseEvent<HTMLElement>, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({
            acceptingInvite: false,
        });
        this.props.dispatch(HouseholdsActions.acceptInviteToHouseholdComplete());
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classNames(classes.formContainer, { [classes.formContainerShift]: this.props.navOpen })} >
                <div style={{ display: 'inline-flex', width: '100%', paddingLeft: 'inherit' }}>
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
                <Snackbar
                    open={this.state.acceptingInvite}
                    autoHideDuration={4000}
                    onClose={this.handleInviteAcceptedClose}
                >
                    <MessageSnackbarContent
                        onClose={this.handleInviteAcceptedClose}
                        variant="success"
                        message="Invite accepted"
                    />
                </Snackbar>
            </form>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    const props: IHouseholdsStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        householdsArray: store.householdsReducer.householdsArray,
        loading: store.loadingReducer.loading,
        acceptingInvite: store.householdsReducer.acceptingInvite,
        navOpen: store.navReducer.navOpen,
    };
    return props;
};

export default compose(withStyles(formStyles), connect(mapStateToProps))(Households);
