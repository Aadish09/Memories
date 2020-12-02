import axios from '../axios';
export const newPost = (payload) => (dispatch)=>{
  dispatch({type: 'NEW_POST',payload});

}
export const fetchAllPost = () => (dispatch) =>{
    dispatch({type: 'LOADING'})
    axios.get('/posts').then((res)=>{
        if(res.data.err!==null)dispatch({type:"ERROR_POST",payload:res.data.err});
        else {dispatch({type:"FETCH_POSTS",payload:res.data.posts});}
    })
}

export const fetchPost = () => (dispatch) =>{
  dispatch({type: 'LOADING'})
  axios.get('/posts').then((res)=>{
      if(res.data.err!==null)dispatch({type:"ERROR_POST",payload:res.data.err});
      else {dispatch({type:"FETCH_POSTS",payload:res.data.posts});}
  })
}


export const Like = (payload) => (dispatch)=>{
  if(payload.post.Likes.includes(payload.user._id)===false){
   axios.post('/posts/like',payload).then((res)=>{
    console.log("Liked ")
  });
  }
}
export const Unlike = (payload) => (dispatch)=>{
  if(payload.post.Likes.includes(payload.user._id)===true){
   axios.post('/posts/unlike',payload).then((res)=>{
    console.log("UnLiked ")
  });
  }
}
export const DeletePost =  (payload) => async (dispatch)=>{
  dispatch({type: "DELETE",payload});
  axios.get(`/bucket/delete/${payload.image}`);
  axios.delete('/posts',{data:payload}).then((res)=>{
    console.log("Deleted ",payload)
  });
}

export const DeleteBookmark = (payload) => (dispatch)=>{
  dispatch({type: "DELETE",payload});
  const postid=payload._id;
  const id= payload.author._id;
  axios.get(`/user/${id}/delete/bookmark/${postid}`).then((res)=>{
    console.log("Deleted ",payload)
  });
}


export const setError = (payload) =>(dispatch) =>{
  dispatch({type: 'ERROR_POST',payload})
}

