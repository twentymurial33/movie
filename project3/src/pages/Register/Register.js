import React from 'react';
import {Link} from 'react-router-dom';
// import MovieCard from "../components/MovieCard/MovieCard.js";
import EmailPassword from "../../components/EmailPassword/EmailPassword.js";
import Footer from "../../components/Footer/Footer.js"


const Register=()=>(
    <div>
        <h3>Sign Up</h3>
        <EmailPassword/>
    </div>
);

export default Register;
