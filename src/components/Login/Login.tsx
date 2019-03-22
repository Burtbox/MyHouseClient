import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import Loading from '../Loading';
import { loginUser } from './loginEpic';
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
        loginUser(this.props.dispatch);
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classNames(classes.formContainer, { [classes.formContainerShift]: this.props.navOpen })}
                onSubmit={this.handleLogin}>
                <Typography variant="headline" gutterBottom={true}>Welcome</Typography>
                <div>
                    {this.props.loggingIn ? (
                        <Loading />
                    ) : (
                            <div>
                                <div style={{ textAlign: 'center', marginTop: '1em' }}>
                                    <Button type="submit" variant="outlined" onClick={this.handleLogin}>
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
