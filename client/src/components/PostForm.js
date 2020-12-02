import React from 'react';
import Form from './Form.js'
import{ Grid,Paper} from '@material-ui/core';
import { TitleComponent } from './TitleComponent.jsx';
import {newPost} from './base64images'
const PostForm = () => {
    return (
        <div className="Post">
        <TitleComponent title={"Memories - A place to store moments"} />
        <Paper elevation={3}>
        <Grid container className="Post-container"> 
            <Grid item className="grid-image"  md={6} lg={6}><img src={newPost} alt="new-post"></img></Grid>
            <Grid item xs={12} sm={12} md={6} className="Post-form-paper">
            <Form />
            </Grid>
        </Grid>
        </Paper>
        </div>
    );
};

export default PostForm;