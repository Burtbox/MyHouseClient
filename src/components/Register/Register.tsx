import { Typography } from '@material-ui/core';
import { default as Button } from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { connect } from 'react-redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import appStyles from '../../styles';
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
            registerUser(user);
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
        return (
            <form style={appStyles.container} onSubmit={this.handleAddUser}>
                <Typography variant="headline">Create Account</Typography>
                <div>
                    <span style={{ verticalAlign: 'middle' }}>
                        Already have a My House account?
              </span> {' '}
                    <Button
                        variant="outlined"
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
                <div>
                    {this.props.registering ? (
                        <Loading />
                    ) : (
                            <Button type="submit" >
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
    };
};

export default connect(mapStateToProps)(Register);
