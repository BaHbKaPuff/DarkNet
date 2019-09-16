import React from "react";
import classes from "./MyPosts.module.css";


const MyPosts = (props) => {

  let handleClickAddPost = () => {
    props.addPost();
  }
  let handlePostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }
  return (
    <div className={classes.myPosts}>
      <div className={classes.commandline}>1. bush</div>
      <textarea className={classes.textareaPost}
        name="post"
        id="1"
        cols="35"
        rows="4"
        placeholder="MacBook-Pro:~ darknet$"
        value={props.newPostText}
        onChange={handlePostChange}
      />
      <button onClick={handleClickAddPost} className={classes.myPosts_button} >></button>
    </div>
  );
};

export default MyPosts;
