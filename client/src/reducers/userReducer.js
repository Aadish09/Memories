

const initialState = {
    isLogged:false,
    user:null,
    error:undefined,
    msg:"",
    loaduser:true
}

const userReducer =(state = initialState, { type, payload }) => {
    switch (type) {
    case "FETCH_USER":
        return {...state,isLogged:true ,loaduser:false,user:payload,error:undefined}
    case "SIGN_IN":
        return {...state, isLogged:true,loaduser:false,user:payload,error:undefined }
    case "SIGN_UP":
        return {...state, isLogged:true,loaduser:false,user:payload,error:undefined }
    case "LOGOUT":
        return {...state, isLogged:false,loaduser:false,user:null,error:undefined }
    case "ERROR_AUTH":
        return {...state,error:payload,loaduser:false}
    case "SUCCESS":
        return {...state,msg:payload,loaduser:false}
   
    default:
        return state
    }
}
export default userReducer