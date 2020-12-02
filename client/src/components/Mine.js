import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import{ Grid} from '@material-ui/core';
import SinglePost from './SinglePost';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TitleComponent } from './TitleComponent.jsx';
import {setError} from '../actions/postActions';
import axios from '../axios';
import {sorryImage} from './base64images'
import {
    Link
  } from "react-router-dom";
const Mine = (props) => {
    const [myPosts, setmyPosts] = useState(null)
    
    props.seterror(undefined)
    useEffect( async ()=>{
    const res= await axios.get(`/user/${props.user._id}/posts`)
       setmyPosts(res.data);
    },[props])
    
    return (
        <div className="Mine">
       {myPosts !==null &&( myPosts.length===0 && <Grid container >
        <Grid item md={6} lg={6}><img className="sorry-image" src={sorryImage} alt="sorry"/></Grid>
        <Grid item md={6} lg={6} className="Saved-right">
            <h1>No posts found !!</h1>
            <Link to='/newPost' className="back">Let's make a new post</Link>
        </Grid>
    </Grid>)}
        <TitleComponent title={!myPosts?"Loading...":"Memories - A place to store moments"} />
        <Grid container className="container" >
            <Grid item xs={12} md={12} className="post-grid" alignItems="stretch">
            {  !myPosts ?
               <CircularProgress className="loader"/>:
               <React.Fragment>{
                   myPosts.map(post => {
                       
                   return <Grid className="post-grid-item" item xs={12} sm={6} md={4} ><SinglePost key={post._id} post={post}/></Grid>
                   })
                }
                </React.Fragment>
            }
            </Grid>
           
        </Grid>
        
        </div>
    );
};
const mapStateToProps = (state) => ({
    user : state.userReducer.user,
    posts:state.postReducer.posts,
    loading:state.postReducer.loading,
    err:state.postReducer.err
})

const mapDispatchToProps = (dispatch)=>{
    return {
        seterror : (payload)=>dispatch(setError(payload))
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(Mine);