import { Typography, withStyles } from '@material-ui/core';
import { default as Button } from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import { ErrorMessageActions } from '../ErrorMessage/errorMessageActions';
import Loading from '../Loading';
import { registerUser } from './registerEpic';
import { IRegisterProps, IRegisterState, IRegisterUserObject } from './registerInterfaces';

export class Register extends React.Component<IRegisterProps, IRegisterState> {
    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            registerUser: {
                email: '',
                password: '',
                confirmPassword: '',
                displayName: '',
            },
        };
    }

    handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.state.registerUser.password === this.state.registerUser.confirmPassword) {

            const user: IRegisterUserObject = {
                displayName: this.state.registerUser.displayName,
                email: this.state.registerUser.email,
                password: this.state.registerUser.password,
                confirmPassword: this.state.registerUser.confirmPassword,
            };
            registerUser(this.props.dispatch, user);
        } else {
            this.props.dispatch(ErrorMessageActions.addError('Your password does not match the confirmed password'));
        }
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            registerUser: { ...this.state.registerUser, [name]: value },
        }));
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classNames(classes.formContainer, { [classes.formContainerShift]: this.props.navOpen })}
                onSubmit={this.handleAddUser}>
                <Typography variant="headline" gutterBottom={true}>Create Account</Typography>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="subheading" gutterBottom={true}>
                        Already have a myHouse or Google account?
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        onClick={() => this.props.history.push(myHouseRoutes.Login)}
                    >
                        Sign In
                    </Button>
                </div>
                <div>
                    <TextField
                        name="displayName"
                        placeholder="My name"
                        label="Display Name"
                        required
                        onChange={this.handleInputChange}
                        disabled={this.props.registering}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        name="email"
                        placeholder="example@email.com"
                        label="Email Address"
                        required
                        onChange={this.handleInputChange}
                        disabled={this.props.registering}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        name="password"
                        type="password"
                        placeholder="**********"
                        label="Password"
                        required
                        onChange={this.handleInputChange}
                        disabled={this.props.registering}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        name="confirmPassword"
                        type="password"
                        placeholder="**********"
                        label="Confirm Password"
                        required
                        onChange={this.handleInputChange}
                        disabled={this.props.registering}
                        margin="normal"
                    />
                </div>
                <div style={{ textAlign: 'center', marginTop: '1em' }}>
                    {this.props.registering ? (
                        <Loading />
                    ) : (
                            <Button variant="outlined" type="submit" >
                                Sign Up
                            </Button>
                        )}
                </div>
            </form>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    return {
        registering: store.registerReducer.registering,
        navOpen: store.navReducer.navOpen,
    };
};

export default compose(withStyles(formStyles), connect(mapStateToProps))(Register);
