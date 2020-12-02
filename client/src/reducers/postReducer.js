
const initialState = {
    posts:[],
    err:undefined,
    loading:false
}

const postreducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case 'NEW_POST':
        return { ...state, posts:[payload,...state.posts] ,loading:false}

    case 'FETCH_POSTS':
        return {...state,posts:payload,loading:false}
    
    case 'LOADING':
        return {...state,loading:true}
    case 'LIKE':
        payload.post.Likes.push(payload.user._id);
        const updatedPosts = state.posts.filter((post)=>{
            return post._id!==payload.post._id; 
        })
        return {...state,posts:[...updatedPosts,payload.post]}
    case 'UNLIKE':
        payload.post.Likes=payload.Likes.filter((userId)=>userId!=payload.user._id);
        const updatedposts = state.posts.filter((post)=>{
            return post._id!==payload.post._id; 
        })
        return {...state,posts:[...updatedposts,payload.post]}
    case 'ERROR_POST':
        return {...state,err:payload,loading:false}
    

    case 'DELETE':
        const updated_posts = state.posts.filter((post)=>{
            if(post._id === payload._id && post.author._id===payload.author._id)return false
            else return true
        })
        return {...state,posts:[...updated_posts]}

    default:
        return state
    }
}
export default postreducer