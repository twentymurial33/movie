// import React from 'react';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EmailPassword from "../../components/EmailPassword/EmailPassword.js";


const Register=()=>(
    <div>
        <h3>Sign Up</h3>
        <EmailPassword/>
    </div>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (event) => {

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Need an account?
    {''}
    <Link to="/register">Register</Link>
  </p>

export default Register;

export {
  SignUpForm,
  SignUpLink,
};
