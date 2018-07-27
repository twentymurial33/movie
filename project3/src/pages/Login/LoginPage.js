// // import React from 'react';
// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import './LoginPage.css';
// import { auth } from "../../helpers/auth.js";
// // import MovieCard from "../components/MovieCard/MovieCard.js";
// import EmailPassword from "../../components/EmailPassword/EmailPassword.js";
// import Footer from "../../components/Footer/Footer.js"

// function setErrorMsg(error) {
//     return {
//       loginMessage: error
//     }
//   }

//   export default class Login extends Component {
//     state = { loginMessage: null }
//     handleSubmit = (e) => {
//       e.preventDefault()
//       Login(this.email.value, this.password.value)
//         .catch((error) => {
//             this.setState(setErrorMsg('Invalid username/password.'))
//           })
//     }
//     // resetPassword = () => {
//     //   resetPassword(this.email.value)
//     //     .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
//     //     .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
//     // }
//     render () {
//       return (
//         <div className="col-sm-6 col-sm-offset-3">
//           <form onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <label for="email">Email</label>
//               <input className="form-control" ref={(email) => this.email = email}/>
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" className="form-control" ref={(pw) => this.pw = pw} />
//             </div>
//             {
//               this.state.loginMessage &&
//               <div className="alert alert-danger" role="alert">
//                 <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
//                 <span className="sr-only">Error:</span>
//                 &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
//               </div>
//             }
//             <button type="submit" className="btn btn-primary">Login</button>
//           </form>
//         </div>
//       )
//     }
//   }
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// import { SignUpLink } from '../SignUp';
// import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
// import * as routes from './routes';

const LogInPage = ({ history }) =>
  <div>
    
    <SignInForm history={history} />
    {/* <PasswordForgetLink /> */}
    {/* <SignUpLink /> */}
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        // history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(LogInPage);

export {
  SignInForm,
};