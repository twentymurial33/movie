import React from 'react';
import Validator from 'validator';
// import InlineError from '../messages/InlineError';

class LoginForm extends React.Component{
    state={
    data:{
        email:'',
        password:''
    },
    loading:false,
    errors:{}
};

onChange=()=>this.setState({...this.state.data,[this.name]: this.value}
)

onSubmit=()=>{
const errors=this.validate(this.state.data);
this.setState({
    errors
});
}

validate=(data)=>{
    const errors ={};
    if(!Validator.isEmail(data.email)) errors.email="Invalid email";
    if(!data.password)errors.password="Can't be blank";
    return errors;
}
render(){
  const {data}=this.state;

    return(
        <LoginForm onSubmit={this.onSubmit}>
            <LoginForm.Field>
                <label htmlFor="email"></label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="example@example.com"
                value={data.email}
                onChange={this.onChange}
                />
                </LoginForm.Field>
                <LoginForm.Field>
                <label htmlFor="password"></label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="make it secure"
                value={data.password}
                onChange={this.onChange}
                />
                </LoginForm.Field>
            {/* <Button primary>Login</Button> */}
        </LoginForm>
    );
}

}

export default LoginForm;