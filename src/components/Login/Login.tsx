import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { connect } from 'react-redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import appStyles from '../../styles';
import { Loading } from '../Loading';
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
            loading: false, // TODO: move loading to redux
        };
    }

    handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const login: IUserAuthenticationObject = {
            email: this.state.user.email,
            password: this.state.user.password,
        };
        this.setState({ loading: true });
        loginUser(login);
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
            <form style={appStyles.container} onSubmit={this.handleLogin}>
                <Typography variant="headline">Welcome</Typography>
                <div>
                    <TextField
                        name="email"
                        type="text"
                        label="Email Address"
                        placeholder="example@email.com"
                        required
                        onChange={this.handleInputChange}
                        disabled={this.state.loading}
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
                        disabled={this.state.loading}
                    />
                </div>
                <div>
                    {this.state.loading ? (
                        <Loading />
                    ) : (
                            <Button type="submit" variant="outlined">
                                Sign In
                            </Button>
                        )}
                </div>
                <br />
                <div>
                    <span style={{ verticalAlign: 'middle' }}> New to My House? </span>{' '}
                    <span>
                        <Button
                            variant="flat"
                            onClick={() => this.props.history.push(myHouseRoutes.Register)}
                        >
                            Sign Up
                        </Button>
                    </span>
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

export default connect(mapStateToProps)(Login);
