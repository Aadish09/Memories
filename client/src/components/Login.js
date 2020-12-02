import React,{useState} from 'react';
import {signIn} from '../actions/userActions'
import {connect} from 'react-redux';
import {setAuthError} from '../actions/userActions'
import { Alert, AlertTitle } from '@material-ui/lab';
import {ExitToApp} from '@material-ui/icons';
import axios from '../axios';
import img from './logo.png'
const Login = (props) => {
    const [form,setForm] =useState({email:"",password:""});
    const handleChange=(e)=>{
        props.setLoginerror(undefined)
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('/auth/login',form).then((res)=>{
            if(res.data){
            props.login(res.data);
            setForm({email:"",password:""});
            props.setLoginerror(undefined);
            }
            else {
                console.log("Invalid");
                props.setLoginerror("Invalid credentials")
            }
        }).catch((err)=>{
            props.setLoginerror("Invalid credentials")

        })
    }
    return (
        <div className="Login">
            <div><img src={img} alt="logo" className="memories"></img></div>
            <h1>Sign In to Memories</h1>
            
            <a href='/auth/google' className="google-btn">
                <div className="google-icon-wrapper">
                    <img alt="google" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
            </a>
            <p className="or">or</p>
            {props.error!==undefined && 
                <Alert severity="error">
                    <AlertTitle>{props.error}</AlertTitle>
                </Alert>
            }
            <form onSubmit={handleSubmit} className="form">
                <input type="email" value={form.email} name="email" required={true} onChange={handleChange} placeholder="Email"></input>
                <input type="password" value={form.password} name="password" required={true} onChange={handleChange} placeholder="Password"></input>
                <div><button className="custombutton" type="submit"><ExitToApp/><p>Sign In</p></button></div>
            </form>
           <p>New here ? <a onClick={()=>props.setOpen(false)}>Signup</a> </p> 
        </div>
    );
};

const mapStateToProps = (state) => ({
    error:state.userReducer.error
})

const mapDispatchToProps = (dispatch)=> {
    return {
    login : (payload)=>dispatch(signIn(payload)),
    setLoginerror :(payload)=>dispatch(setAuthError(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);