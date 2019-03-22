import { TextField, Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import Loading from '../Loading';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';
import { loginUser, loginWithGoogle } from './loginEpic';
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

    handleLogin = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        const login: IUserAuthenticationObject = {
            email: this.state.user.email,
            password: this.state.user.password,
        };
        loginUser(this.props.dispatch, login);
    }

    handleLoginWithGoogle = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        loginWithGoogle(this.props.dispatch);
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
        const { classes } = this.props;
        return (
            <form className={classNames(classes.formContainer, { [classes.formContainerShift]: this.props.navOpen })}
                onSubmit={this.handleLogin}>
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
                                <div style={{ textAlign: 'center', marginTop: '1em' }}>
                                    <Button type="submit" variant="outlined" onClick={this.handleLogin}>
                                        Sign In
                                    </Button>
                                    <Button type="submit" variant="outlined" onClick={this.handleLoginWithGoogle}>
                                        Sign In With Google
                                    </Button>
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
        navOpen: store.navReducer.navOpen,
    };
};

export default compose(withStyles(formStyles), connect(mapStateToProps))(Login);
