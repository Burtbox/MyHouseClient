import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import { connect } from 'react-redux';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import appStyles from '../../styles';
import { addError } from '../ErrorMessage/errorMessageActions';
import { registerUser } from './registerActions';
import { IRegisterReducer, IRegisterState, IRegisterUserObject } from './registerInterfaces';

export class Register extends React.Component<IRegisterReducer, IRegisterState> {
    constructor(props: IRegisterReducer) {
        super(props);
        this.state = {
            registerUser: {
                email: '',
                password: '',
                confirmPassword: '',
                displayName: '',
            },
            loading: false,
            error: null,
        };
    }

    handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.state.registerUser.password === this.state.registerUser.confirmPassword) {
            const { dispatch, history } = this.props;
            const user: IRegisterUserObject = {
                displayName: this.state.registerUser.displayName,
                email: this.state.registerUser.email,
                password: this.state.registerUser.password,
                confirmPassword: this.state.registerUser.confirmPassword,
            };
            this.setState({ loading: true });
            dispatch(registerUser(user))
              .then(() => { history.push(myHouseRoutes.MyAccount); })
              .catch((error: Error) => { this.setState({ error, loading: false }); });
        } else {
            // ED! This is lazy - make this better
            this.props.dispatch(() => addError('Your password does not match the confirmed password'));
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
            <h2>Create Account</h2>
            <div>
              <span style={{ 'vertical-align': 'middle' }}>
              Already have a My House account?
              </span> {' '}
              <FlatButton
                secondary={true}
                label="Sign In"
                onClick={() => this.props.history.push(myHouseRoutes.Login)}
              />
            </div>

            <div>
              <TextField
                name="displayName"
                hintText="My name"
                floatingLabelText="Display Name"
                required
                onChange={this.handleInputChange}
                disabled={this.state.loading}
                maxlength="100"
              />
            </div>
            <div>
              <TextField
                name="email"
                hintText="example@email.com"
                floatingLabelText="Email Address"
                required
                onChange={this.handleInputChange}
                disabled={this.state.loading}
                maxlength="50"
              />
            </div>
            <div>
              <TextField
                name="password"
                type="password"
                hintText="**********"
                floatingLabelText="Password"
                required
                onChange={this.handleInputChange}
                disabled={this.state.loading}
                maxlength="30"
              />
            </div>
            <div>
              <TextField
                name="confirmPassword"
                type="password"
                hintText="**********"
                floatingLabelText="Confirm Password"
                required
                onChange={this.handleInputChange}
                disabled={this.state.loading}
                maxlength="30"
              />
            </div>
            <div>
              {this.state.loading ? (
                <CircularProgress />
              ) : (
                <FlatButton type="submit" label="Sign Up" />
              )}
            </div>
          </form>
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    return {
        registering: store.registerReducer.registering,
    };
};

export default connect(mapStateToProps)(Register);
