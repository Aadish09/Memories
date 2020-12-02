import React,{useState} from 'react';
import {newPost,setError} from '../actions/postActions'
import {connect} from 'react-redux';
import axios from '../axios';
import { Alert, AlertTitle } from '@material-ui/lab';
import {useHistory } from 'react-router-dom';
import Stepper from "./Stepper";
const Form = (props) => {
    const history=useHistory();
    props.seterror(undefined)
    const [formerror,setformerror]=useState(undefined)
    const [progress, setProgress] = useState(false);
    const [form,setForm] =useState({title:"",author:props.user._id,body:"",image:null});
    const [file, setfile] = useState(null)
    const setImage = (img)=>{
       setfile(img);
    }
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        setformerror(undefined)
    }
    const countWords = (msg)=>{
       return msg.split(' ').length;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(form.title==="" || countWords(form.title)<3){ setformerror("Enter the title of min 3 words") ;return;}
        else if(form.body===""|| countWords(form.body)<3){setformerror("Enter the description of min 3 words") ;return;}
        else if(file===null){setformerror("Choose a file to upload");console.log(props.err) ;return;}
        else{
            setProgress(true);
            axios.get('/bucket/upload').then((res)=>{
                if(res.data){
                const formData={...form,image:res.data.key} //url 
                axios.put(res.data.url,file,{header:{'Content-Type':file.type} }).then((res)=>{

                    axios.post('/posts/new',formData).then((res)=>{
                        if(res.data.success===undefined){props.seterror(res.data.error);return;}
                        history.push("/dashboard");
                        props.newpost(res.data.post);
                        setForm({title:"",author:"",body:"",image:""});
                        setProgress(false)
                    })
                })
            }
    })
        

        
      }
    }
    const Reset = ()=>{
        setForm({title:"",author:"",body:"",image:null});
    }
    return (
        <div className="Form">
        <h1>Share memory !</h1>
        {formerror!==undefined && <Alert severity="error">
        <AlertTitle>{formerror}</AlertTitle>
        </Alert>}
            <Stepper img={form.image}
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            setImage={(data)=>setImage(data)} 
            setformerror={(err)=>setformerror(err)}
            Reset={Reset}
            form ={form}
            progress={progress}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn:state.userReducer.isLogged,
    user:state.userReducer.user,
    err:state.postReducer.err
})

const mapDispatchToProps = (dispatch)=>{
    return {
        newpost : (payload)=>dispatch(newPost(payload)),
        seterror : (payload)=>dispatch(setError(payload))
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(Form);