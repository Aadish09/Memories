import React,{useState} from 'react';
import {logOut} from '../actions/userActions'
import {connect} from 'react-redux'
import img from "./logo.png"
import {
    Link
  } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {Menu,Bookmark,Close} from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PostAdd from '@material-ui/icons/PostAdd';
import AllInbox from '@material-ui/icons/AllInbox';

const Navbar = (props) => {
    const [open, setopen] = useState(false)
 
    return (
        <div>
        <div className="Navbar-wrapper">
        <div className="Navbar">
            <div className="Navbar-left"><img alt="logo" src={img} ></img><h2><Link to='/dashboard'>Memories </Link></h2></div>
            {props.isLoggedIn && <div className="Navbar-center">
                <Link key="1" to="/newPost">NewPost</Link>
                <Link key="2" to="/myposts">MyPosts</Link>
                <Link key="3" to="/saved">SavedPosts</Link>
            </div>}
            <div className="Navbar-right">
            
            {props.isLoggedIn  && <button className={"logout"} onClick={props.logout}>Logout</button>}
             </div>
        </div>
        </div>
        <div className="Navbar-res">
            <div className="Navbar-res-left"><img alt="logo" src={img} ></img><h2><Link to='/dashboard'>Memories </Link></h2></div>
            {props.isLoggedIn && 
                <div className="Navbar-res-right">
                {!open?<Menu onClick={()=>setopen(!open)} />:<Close onClick={()=>setopen(!open)} />}
                </div>}
        </div>
        {
            open && <List className="collapse-nav" component="nav" >
            <ListItem button>
                <Link key="1" to="/newPost"><PostAdd/>NewPost</Link>
            </ListItem>
            <Divider light />
            <ListItem button >
                <Link key="2" to="/myposts"><AllInbox/>MyPosts</Link>
            </ListItem>
            <Divider light />
            <ListItem button>
                <Link key="3" to="/saved"><Bookmark/>SavedPosts</Link>
            </ListItem>
            <Divider light />
            <ListItem divider >
            {props.isLoggedIn && <div className="Username"><AccountCircle/>{( props.user.name )}</div>}
            </ListItem>
            <Divider light />
            {props.isLoggedIn && <ListItem button onClick={props.logout} >
            Logout
            </ListItem>}
          </List>
        }
        </div>
    );
};
const mapStateToProps = (state) => ({
    isLoggedIn:state.userReducer.isLogged,
    user:state.userReducer.user
})

const mapDispatchToProps = (dispatch)=> {
    return {
    logout : ()=>dispatch(logOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);