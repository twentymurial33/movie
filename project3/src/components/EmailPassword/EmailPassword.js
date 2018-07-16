import React, {Component} from 'react';


const EmailPassword = () => (

  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s3">
          <input id="email" type="email" class="validate" />
          <label for="email">Email/Username</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s3">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
    </form>
  </div>

);

export default EmailPassword;
