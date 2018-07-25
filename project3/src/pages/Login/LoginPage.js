// import React from 'react';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';
// import MovieCard from "../components/MovieCard/MovieCard.js";
import EmailPassword from "../../components/EmailPassword/EmailPassword.js";
import Footer from "../../components/Footer/Footer.js"


const LoginPage=()=>(
    <div>
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

export default LoginPage;

export {
  SignUpForm,
  SignUpLink,
};
