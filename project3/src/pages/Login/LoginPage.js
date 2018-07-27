// import React from 'react';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import { auth } from "../../helpers/auth.js";
// import MovieCard from "../components/MovieCard/MovieCard.js";
import EmailPassword from "../../components/EmailPassword/EmailPassword.js";
import Footer from "../../components/Footer/Footer.js"

function setErrorMsg(error) {
    return {
      loginMessage: error
    }
  }

  export default class Login extends Component {
    state = { loginMessage: null }
    handleSubmit = (e) => {
      e.preventDefault()
      Login(this.email.value, this.password.value)
        .catch((error) => {
            this.setState(setErrorMsg('Invalid username/password.'))
          })
    }
    // resetPassword = () => {
    //   resetPassword(this.email.value)
    //     .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
    //     .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    // }
    render () {
      return (
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="email">Email</label>
              <input className="form-control" ref={(email) => this.email = email}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" ref={(pw) => this.pw = pw} />
            </div>
            {
              this.state.loginMessage &&
              <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
              </div>
            }
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      )
    }
  }
