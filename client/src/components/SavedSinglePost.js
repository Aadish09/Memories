import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Delete} from '@material-ui/icons';
import moment from 'moment';
import {DeleteBookmark,Like} from '../actions/postActions';
import {connect} from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

import {
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
 root:{
  backgroundColor:'#F7FAFC',
  border:'solid 2px #E2E8F0',
  borderBottom:'solid 5px #6415FF'
 },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    verticalAlign:'middle',
    borderRadius:'3px 3px 0px 0px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#6415FF",
  },
}));
 function SavedSinglePost(props) {
  const classes = useStyles();
  const [Liked, setLiked] = useState("");
  useEffect(() => {
    if(props.post.Likes.includes(props.user._id))setLiked("Liked")
  }, [props])
  
  return (
    
    <Card className={classes.root} >
    <Link to={`/post/${props.post._id}`} >
      <CardMedia
        className={classes.media}
        image={props.post.image?"https://memories-of-vit-bucket.s3.ap-south-1.amazonaws.com/"+props.post.image:"https://gifimage.net/wp-content/uploads/2018/06/transparent-loading-gif-13.gif"}
        title={props.post.title.substring(0,5) }
      />
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" className={classes.avatar}>
            {props.post.author.name.charAt(0)}
          </Avatar>
        }
        title={props.post.title.slice(0,40)+"..."}
        subheader={moment(Number(props.post.createdOn)).format('MMM DD h:mm A')}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary"  component="p">
          {props.post.body.slice(0,100)+" ..."}
        </Typography>
      </CardContent>
      </Link>
      <CardActions disableSpacing>
        <div onClick={()=>{setLiked("Liked");(!props.post.Likes.includes(props.user._id) ) && props.like({post:props.post,user:props.user})}}>
        <Tooltip title="Like">
        <IconButton  className={Liked} aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
        </Tooltip>
        </div>
        <div onClick={()=>props.delete(props.post)}>
        <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
        </Tooltip>
        </div> 
        
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  user:state.userReducer.user
})

const mapDispatchToProps = (dispatch) =>{
 return{
  like:(payload)=>dispatch(Like(payload)),
  delete:(payload)=>dispatch(DeleteBookmark(payload)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SavedSinglePost);
