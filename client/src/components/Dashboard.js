import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import{ Grid} from '@material-ui/core';
import SinglePost from './SinglePost';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TitleComponent } from './TitleComponent.jsx';
import { Alert, AlertTitle } from '@material-ui/lab';
import { fetchAllPost } from '../actions/postActions';
const Dashboard = (props) => {
        useEffect(() => {
          props.fetchallpost();
      }, [])
    return (
        <div className="Dashboard">
        {props.err!==undefined && <Alert className="err-box" severity="error">
        <AlertTitle>{props.err}</AlertTitle>
        </Alert>}
        <TitleComponent title={props.loading?"Loading...":"Memories - A place to store moments"} />
        <Grid container className="container" >
            <Grid item xs={12} md={12} className="post-grid" >
            {  props.loading ?
               <CircularProgress className="loader"/>:
               <React.Fragment>{
                   props.posts.map(post => {
                   return <Grid key={post._id} className="post-grid-item" item xs={12} sm={6} md={4} ><SinglePost key={post._id} post={post}/></Grid>
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
    posts:state.postReducer.posts,
    loading:state.postReducer.loading,
    err:state.postReducer.err
})

const mapDispatchToProps = (dispatch) =>{
    return{fetchallpost:()=>dispatch(fetchAllPost())}
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);