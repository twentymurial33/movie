// // import React from 'react';
// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import { auth } from "../../helpers/auth.js";
// import EmailPassword from "../../components/EmailPassword/EmailPassword.js";

// function setErrorMsg(error) {
//   return {
//     registerError: error.message
//   }
// }

// export default class Register extends Component {
//   state = {  currentItem: '',
//   username: '',
//   items: [],
//   user: null
// }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     auth(this.email.value, this.pw.value)
//       .catch(e => this.setState(setErrorMsg(e)))
//   }
//   render () {
//     return (
//       <div className="col-sm-6 col-sm-offset-3">
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//           {/* {this.state.user ? */}
//             <label>Email</label>
//             <input class="form-control" ref={(email) => this.email = email} placeholder="Email"/>
//           </div>
//           // <div className="form-group">
//             <label>Password</label>
//             <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
//           </div>

          
//             <div className="alert alert-danger" role="alert">
//               <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
//               <span className="sr-only">Error:</span>
//               &nbsp;{this.state.registerError}
//             </div>
//           }
//           <button type="submit" className="btn btn-primary">Register</button>
//         </form>
//       </div>


//     )
//   }

import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
// import * as routes from '../../routes';

const SignUpPage = ({ history }) =>
  <div>
   
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            // history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    {/* <Link to={routes.SIGN_UP}>Sign Up</Link> */}
  </p>
export default withRouter(SignUpPage);
export {
  SignUpForm,
  SignUpLink,
};