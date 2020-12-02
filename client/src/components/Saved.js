import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import{ Grid} from '@material-ui/core';
import SavedSinglePost from './SavedSinglePost';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TitleComponent } from './TitleComponent.jsx';
import {sorryImage} from './base64images'
import {
    Link
  } from "react-router-dom";
  import axios from '../axios';

const Saved = (props) => {
    const [SavedPosts, setSavedPosts] = useState(null)
    useEffect( async ()=>{
        const res= await axios.get(`/user/${props.user._id}/bookmarks`)
           setSavedPosts(res.data);
        },[props])
    
    return (
        <div className="Saved">
        {
        props.user && ((SavedPosts &&SavedPosts.length==0) && 
        <Grid container >
            <Grid item md={6} lg={6}><img className="sorry-image" src={sorryImage} alt="sorry"/></Grid>
            <Grid item md={6} lg={6} className="Saved-right">
                <h1>No posts found !!</h1>
                <Link to='/dashboard' className="back">Let's go to Dashboard</Link>
            </Grid>
        </Grid>
        )}
        <TitleComponent title={!SavedPosts?"Loading...":"Memories - A place to store moments"} />
        <Grid container className="container" >
            <Grid item xs={12} md={12} className="post-grid" alignItems="stretch">
            { !SavedPosts?
               <CircularProgress className="loader"/>:
               <React.Fragment>{
                   SavedPosts.map(post => {
                   return <Grid className="post-grid-item" item xs={12} sm={6} md={4} ><SavedSinglePost key={post._id} post={post}/></Grid>
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


export default connect(mapStateToProps,null)(Saved);