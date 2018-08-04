import { Snackbar, Typography, withStyles } from '@material-ui/core';
import { default as Button } from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import { HouseholdsActions } from '../Households/householdsActions';
import Loading from '../Loading';
import MessageSnackbarContent from '../MessageSnackbarContent';
import { IAddHouseholdProps, IAddHouseholdState } from './addHouseholdInterfaces';

export class AddHousehold extends React.Component<IAddHouseholdProps, IAddHouseholdState> {
    constructor(props: IAddHouseholdProps) {
        super(props);
        this.state = {
            household: {
                enteredBy: props.loggedInUser.userId,
                name: '',
                creatorDisplayName: props.loggedInUser.displayName,
            },
            addingHousehold: false,
            householdAdded: false,
        };
    }

    componentWillReceiveProps(nextProps: IAddHouseholdProps) {
        this.setState({ householdAdded: nextProps.householdAdded });
    }

    handleAddHousehold = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.dispatch(HouseholdsActions.addHousehold({ token: this.props.loggedInUser.token, household: this.state.household }));
        this.setState({ household: { ...this.state.household, name: '' }, addingHousehold: true });
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            household: { ...this.state.household, [name]: value },
        }));
    }

    handleHouseholdAddedClose = (event: React.MouseEvent<HTMLElement>, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({
            householdAdded: false,
            addingHousehold: false,
        });
        this.props.dispatch(HouseholdsActions.addHouseholdComplete());
    }

    handleViewHouseholdClick = () => {
        this.props.history.push(myHouseRoutes.Households);
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classNames(classes.formContainer, { [classes.formContainerShift]: this.props.navOpen })}
             onSubmit={this.handleAddHousehold}>
                <Typography variant="headline" gutterBottom={true}>Add Household</Typography>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="subheading" gutterBottom={true}>
                        A collection of people you want to use the app with
                    </Typography>
                </div>
                <div>
                    <TextField
                        name="name"
                        placeholder="Our House"
                        label="Household Name"
                        required
                        value={this.state.household.name}
                        onChange={this.handleInputChange}
                        disabled={this.props.loading > 0}
                        margin="normal"
                    />
                </div>
                <div>
                    {this.props.loading ? (
                        <Loading />
                    ) : (
                            <Button variant="outlined" type="submit" disabled={this.state.addingHousehold} >
                                Add
                            </Button>
                        )}
                </div>
                <Snackbar
                    open={this.state.householdAdded}
                    autoHideDuration={4000}
                    onClose={this.handleHouseholdAddedClose}
                >
                    <MessageSnackbarContent
                        onClose={this.handleHouseholdAddedClose}
                        variant="success"
                        message="Household added"
                        additionalActions={
                            <Button key="view" size="small" onClick={this.handleViewHouseholdClick}>
                                View
                            </Button>
                        }
                    />
                </Snackbar>
            </form>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    return {
        loading: store.loadingReducer.loading,
        loggedInUser: store.usersReducer.loggedInUser,
        householdAdded: store.householdsReducer.householdAdded,
        navOpen: store.navReducer.navOpen,
    };
};

export default compose(withStyles(formStyles), connect(mapStateToProps))(AddHousehold);
