import React from "react";
import classes from "./Post.module.css";


const Post = (props) => {
  let newPostElement = React.createRef();
  
  return (
    <div className={classes.post} ref={newPostElement} id={props.id}>
      <p>
        {props.text}
      </p>
        <span>лайки: {props.like} </span>
        <span> репосты: {props.repost} </span>
        <button className={classes.postMenu} >Delete</button>
        <button className={classes.postMenu} >Edit</button>
    </div>
  );
};

export default Post;
