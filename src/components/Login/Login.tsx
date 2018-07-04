import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import auth, { firebaseUiConfig } from '../../helpers/firebase';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import Loading from '../Loading';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';
import { loginUser } from './loginEpic'; // TODO: Remove this direct call?
import { ILoginProps, ILoginState } from './loginInterfaces';

export class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
        };
    }

    handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const login: IUserAuthenticationObject = {
            email: this.state.user.email,
            password: this.state.user.password,
        };
        loginUser(this.props.dispatch, login);
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            user: { ...this.state.user, [name]: value },
        }));
    }

    render() {
        return (
            <form className={this.props.classes.container} onSubmit={this.handleLogin}>
                <Typography variant="headline" gutterBottom={true}>Welcome</Typography>
                <div>
                    <TextField
                        name="email"
                        type="text"
                        label="Email Address"
                        placeholder="example@email.com"
                        required
                        onChange={this.handleInputChange}
                        disabled={this.props.loggingIn}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="**********"
                        autoComplete="current-password"
                        required
                        onChange={this.handleInputChange}
                        disabled={this.props.loggingIn}
                        margin="normal"
                    />
                </div>
                <div>
                    {this.props.loggingIn ? (
                        <Loading />
                    ) : (
                            <div>
                                <div>
                                    <Button type="submit" variant="outlined">
                                        Sign In
                                </Button>
                                </div>
                                <div>
                                    <StyledFirebaseAuth uiConfig={firebaseUiConfig} firebaseAuth={auth} />
                                </div>
                                <div style={{ textAlign: 'center', marginTop: '1em' }}>
                                    <Typography variant="subheading" gutterBottom={true}> New to My House? </Typography>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        onClick={() => this.props.history.push(myHouseRoutes.Register)}
                                    >
                                        Sign Up
                            </Button>
                                </div>
                            </div>
                        )}
                </div>

            </form>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    return {
        loggingIn: store.loginReducer.loggingIn,
    };
};

export default compose(withStyles(formStyles), connect(mapStateToProps))(Login);
