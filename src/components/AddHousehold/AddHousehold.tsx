import { Typography, withStyles } from '@material-ui/core';
import { default as Button } from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import Loading from '../Loading';
import { AddHouseholdActions } from './addHouseholdActions';
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
        };
    }

    handleAddHousehold = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.dispatch(AddHouseholdActions.addHousehold({ token: this.props.loggedInUser.token, household: this.state.household }));
        this.setState({ household: { ...this.state.household, name: '' } });
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            household: { ...this.state.household, [name]: value },
        }));
    }

    render() {
        return (
            <form className={this.props.classes.container} onSubmit={this.handleAddHousehold}>
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
                        onChange={this.handleInputChange}
                        disabled={this.props.loading > 0}
                        margin="normal"
                    />
                </div>
                <div>
                    {this.props.loading ? (
                        <Loading />
                    ) : (
                            <Button variant="outlined" type="submit" >
                                Add
                            </Button>
                        )}
                </div>
            </form>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    return {
        loading: store.loadingReducer.loading,
        household: store.addHouseholdReducer.household,
        loggedInUser: store.usersReducer.loggedInUser,
    };
};

export default compose(withStyles(formStyles), connect(mapStateToProps))(AddHousehold);
