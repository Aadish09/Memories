import './App.css';
import React,{useEffect} from 'react';
import Auth from './Auth';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Mine from './Mine.js';
import Saved from './Saved.js';
import Main from './Main.js';
import PostForm from './PostForm.js';
import PostView from './PostView.js'
import {fetchUser} from '../actions/userActions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from './Footer.js'

function App(props) {
props.fetchuser();

  return (
    <div className="App">
        <Router>
        <React.Fragment>
        {props.loaduser ? <CircularProgress className="loader"/>
          :<Switch>
            <Route path="/" exact> {props.loggedIn? <Redirect to="/dashboard" exact/>:<Redirect to="/Auth"/>}</Route>
            <Route path="/dashboard" exact>
               {props.loggedIn ?<React.Fragment><Navbar/><Main/><Dashboard /><Footer/></React.Fragment>:<Redirect to="/Auth" exact/>}
            </Route>
            <Route path="/newPost" exact>
               {props.loggedIn ?<React.Fragment><Navbar/><PostForm/><Footer/></React.Fragment>:<Redirect to="/Auth" exact/>}
            </Route>
            <Route path="/myposts" exact>
               {props.loggedIn ?<React.Fragment><Navbar/><Mine/><Footer/></React.Fragment>:<Redirect to="/Auth" exact/>}
            </Route>
            <Route path="/saved" exact>
               {props.loggedIn ?<React.Fragment><Navbar/><Saved /><Footer/></React.Fragment>:<Redirect to="/Auth" exact/>}
            </Route>
            <Route path="/Auth" exact>
            {props.loggedIn? <Redirect to="/dashboard" exact/>:<Auth/> }
            </Route>
            <Route path="/post/:id" exact>
            {props.loggedIn?<React.Fragment><PostView posts={props.posts}/></React.Fragment> :<Auth/> }
            </Route>
          </Switch>}
        </React.Fragment>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts:state.postReducer.posts,
  loggedIn : state.userReducer.isLogged,
  loaduser:state.userReducer.loaduser
})
const mapDispatchToProps = (dispatch) =>{
  return{fetchuser:()=>dispatch(fetchUser())}
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

