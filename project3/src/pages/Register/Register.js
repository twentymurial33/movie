// import React from 'react';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { auth } from "../../helpers/auth.js";
import EmailPassword from "../../components/EmailPassword/EmailPassword.js";


// const Register=()=>(
//     <div>
//         <h3>Sign Up</h3>
//         <EmailPassword/>
//     </div>
// );

// class SignUpForm extends Component {
//   constructor(props) {
//     super(props);
//   }

//   onSubmit = (event) => {

//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>

//       </form>
//     );
//   }
// }

// const SignUpLink = () =>
//   <p>
//     Need an account?
//     {''}
//     <Link to="/register">Register</Link>
//   </p>

// export default Register;

// export {
//   SignUpForm,
//   SignUpLink,
// };



function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
}