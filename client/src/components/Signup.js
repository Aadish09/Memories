import React,{useState} from 'react';
import {signUp} from '../actions/userActions'
import {connect} from 'react-redux';
import {setAuthError} from '../actions/userActions'
import { Alert, AlertTitle } from '@material-ui/lab';
import {ExitToApp} from '@material-ui/icons';
import axios from '../axios';
import img from './logo.png'

const SignUp = (props) => {
    const [form,setForm] =useState({email:"",password:"",name:""});
    const handleChange=(e)=>{
        props.setSignuperror(undefined);
        setForm({...form,[e.target.name]:e.target.value})
    }
    const checkEmail=(payload)=>{
        axios.get(`/auth/email/${payload}`).then((res)=>{
            console.log(res)
            if(res.data.err!==null)props.setSignuperror(res.data.err);
        })
    }
    const confirmPassword = (e)=>{
        if(e.target.value!==form.password)e.target.setCustomValidity("Password don't match")
        else {
            e.target.setCustomValidity("")
            props.setSignuperror(undefined);
            
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('/auth/signup',form).then((res)=>{
            props.SignUp(res.data)
            setForm({email:"",password:"",name:""});
        })
    }
    return (
        <div className="SignUp">
            <div><img src={img} alt="logo" className="memories"></img></div>
            <h1>Sign Up to Memories</h1>
            
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
                <input type="email" value={form.email} name="email" required={true} onBlur={checkEmail(form.email)} onChange={handleChange} placeholder="Email"></input>
                <input type="text" value={form.name} name="name" required={true} onChange={handleChange} placeholder="Username"></input>
                <input type="password" value={form.password} id="password" name="password" required={true} onChange={handleChange} placeholder="Password"></input>
                <input type="password" name="confirmPassword" id="confirmPassword" required={true} onChange={confirmPassword} placeholder="Confirm Password"></input>
                <div><button className="custombutton" type="submit"><ExitToApp/><p>Sign Up</p></button></div>
            </form>
            <p>Already a user ? <a onClick={()=>props.setOpen(true)}>Login</a></p>
        </div>
    );
};
const mapStateToProps = (state) => ({
    error:state.userReducer.error
})

const mapDispatchToProps = (dispatch)=> {
   return {SignUp : (payload)=>dispatch(signUp(payload)),setSignuperror :(payload)=>dispatch(setAuthError(payload))}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);