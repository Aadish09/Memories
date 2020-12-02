import React,{useState} from 'react';
import {signIn} from '../actions/userActions'
import Login from './Login' ;
import Signup from './Signup';
import {connect} from 'react-redux';
import{ Grid,Paper} from '@material-ui/core';
import {AuthImage} from './base64images'
const Auth = (props) => {
    const [login,openLogin]=useState(true);

    return (
        <div className="Auth">
        <Paper elevation={3} className="Paper">
            <Grid container className="container" >
                <Grid item xs={12} md={5}>
                    {login ?<Login setOpen={openLogin} />: <Signup setOpen={openLogin}/>}
                </Grid>

                <Grid item xs={12} md={7} className="right">
                    <img src={AuthImage} alt="login-img"></img>
                </Grid>
            </Grid>
        </Paper>
        </div>
    );
};
const mapDispatchToProps = (dispatch)=> {
    return {
    login : (payload)=>dispatch(signIn(payload))
    }
}

export default connect(null,mapDispatchToProps)(Auth);