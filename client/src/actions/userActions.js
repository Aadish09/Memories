import axios from '../axios'

export const signIn = (payload) => (dispatch)=>{
    dispatch({type: 'SIGN_IN',payload}) 
};
export const signUp = (payload) => (dispatch)=>{
    dispatch({type: 'SIGN_UP',payload}) 
    
};

export const logOut = () => async (dispatch)=>{
   dispatch({type: 'LOGOUT'}) 
   await axios.get('/auth/logout');
}

export const setAuthError = (data) =>(dispatch) =>{
    dispatch({type: 'ERROR_AUTH',payload:data})
}

export const SetMessage = (payload) => ({
    type: 'MESSAGE',
    payload
})
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    if(res.data.user)dispatch({ type: 'FETCH_USER', payload: res.data.user });
    else dispatch({ type: 'LOGOUT'});
};

