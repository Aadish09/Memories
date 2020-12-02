import React,{useEffect,useState} from 'react';
import{ Grid,Paper} from '@material-ui/core';
import {useParams} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { TitleComponent } from './TitleComponent.jsx';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import moment from 'moment';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Delete,Bookmark} from '@material-ui/icons';
import {DeletePost,Like} from '../actions/postActions';
import Tooltip from '@material-ui/core/Tooltip';
import {connect} from 'react-redux';
import {
    Link
  } from "react-router-dom";
import axios from '../axios'
const PostView = (props) => {
    let {id } = useParams();
    var Singlepost=null;
    Singlepost=props.posts.filter((post)=>{
        return post._id===id;
    })
    const [Action, setAction] = useState("");
    const [Liked, setLiked] = useState("");
    useEffect(() => {
      if(Singlepost[0].author.bookmarks.includes(Singlepost[0]._id))setAction("Bookmarked");
      if(Singlepost[0].Likes.includes(Singlepost[0].author._id))setLiked("Liked")
    }, [props])
    
    
    const BookmarkPost = () => {
      if(Singlepost[0].author.bookmarks.includes(Singlepost[0]._id))return ;
      const payload={userId:Singlepost[0].author._id,postId:Singlepost[0]._id};
      axios.post('/posts/bookmark',payload).then((res)=>{
        console.log("Bookmarked",payload)
      });
    }
    
    return (
        <div className="PostView-wrapper">
        <Link to='/dashboard' className="back absolute">Back</Link>
        <div className="PostView">
        <TitleComponent title={"Memories - A place to store moments"} />
        {Singlepost && (Singlepost.length===0?<CircularProgress className="loader"/>:
        <Paper className="Post-container-paper" elevation={3}>
        <Grid container className="Post-container"> 
            <Grid className="single-post-image" item xs={12} sm={12} md={8} lg={8}><img src={Singlepost[0].image?"https://memories-of-vit-bucket.s3.ap-south-1.amazonaws.com/"+Singlepost[0].image:"https://gifimage.net/wp-content/uploads/2018/06/transparent-loading-gif-13.gif"} alt="new-post"></img></Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} className="Post-form-paper">
            <div className="post-header">
            <CardHeader
                avatar={
                <Avatar aria-label="avatar" className="avatar">
                    {Singlepost[0].author.name.charAt(0)}
                </Avatar>
                }
                title={Singlepost[0].title.slice(0,40)+"..."}
                subheader={moment(Number(Singlepost[0].createdOn)).format('MMM DD h:mm A')}
            />
            <Divider light/>
            <div className="post-body"> <p>{Singlepost[0].body}</p></div>
            </div>
           
            <div className="post-footer">
            <Divider light/>
            <CardActions disableSpacing>
                <div onClick={()=>{setLiked("Liked");(!Singlepost[0].Likes.includes(Singlepost[0].author._id) ) && props.like({post:Singlepost[0],user:Singlepost[0].author})}}>
                    <Tooltip title="Like">
                    <IconButton  className={Liked} aria-label="add to favorites" >
                    <FavoriteIcon />
                    </IconButton>
                    </Tooltip>
                </div>
                <div onClick={()=>props.delete(Singlepost[0])}>
                    <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                    <Delete />
                    </IconButton>
                    </Tooltip>
                </div> 
                <div onClick={()=>{setAction("Bookmarked");BookmarkPost()}}>
                    <Tooltip title="Bookmark">
                    <IconButton className={Action} aria-label="bookmark">
                    <Bookmark />
                    </IconButton>
                    </Tooltip>
                </div>
            </CardActions>
            </div>
            </Grid>
        </Grid>
        </Paper>
        )}
        </div>
        <div className="PostViewMob">
            <Grid container >
            <Grid item className="PostViewMob-image-div"><img src={Singlepost[0].image?"https://memories-of-vit-bucket.s3.ap-south-1.amazonaws.com/"+Singlepost[0].image:"https://gifimage.net/wp-content/uploads/2018/06/transparent-loading-gif-13.gif"} alt="new-post"></img></Grid>
            <Grid item className="PostViewMob-desc-div">
            <div className="post-header-mob">
            <CardHeader
                avatar={
                <Avatar aria-label="avatar" className="avatar">
                    {Singlepost[0].author.name.charAt(0)}
                </Avatar>
                }
                title={Singlepost[0].title.slice(0,40)+"..."}
                subheader={moment(Number(Singlepost[0].createdOn)).format('MMM DD h:mm A')}
            />
            <Divider light/>
            <div className="post-body-mob"> <p>{Singlepost[0].body}</p></div>
            </div>
           
            <div className="post-footer-mob">
            <Divider light/>
            <CardActions disableSpacing>
                <div onClick={()=>{setLiked("Liked");(!Singlepost[0].Likes.includes(Singlepost[0].author._id) ) && props.like({post:Singlepost[0],user:Singlepost[0].author})}}>
                    <Tooltip title="Like">
                    <IconButton  className={Liked} aria-label="add to favorites" >
                    <FavoriteIcon />
                    </IconButton>
                    </Tooltip>
                </div>
                <div onClick={()=>props.delete(Singlepost[0])}>
                    <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                    <Delete />
                    </IconButton>
                    </Tooltip>
                </div> 
                <div onClick={()=>{setAction("Bookmarked");BookmarkPost()}}>
                    <Tooltip title="Bookmark">
                    <IconButton className={Action} aria-label="bookmark">
                    <Bookmark />
                    </IconButton>
                    </Tooltip>
                </div>
            </CardActions>
            </div>
            
            </Grid>
            </Grid>

        </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return{
     like:(payload)=>dispatch(Like(payload)),
     delete:(payload)=>dispatch(DeletePost(payload)),
     
     }
   }
   
export default connect(null,mapDispatchToProps)(PostView);
