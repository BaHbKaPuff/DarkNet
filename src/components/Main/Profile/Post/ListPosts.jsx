import React from "react";
import Post from "./Post";

const ListPosts = (props) => {
  let listPosts = props.listPosts;
  return (
    listPosts.map(listPosts => (
      <Post
        key={listPosts.id}
        id={listPosts.id}
        text={listPosts.text}
        like={listPosts.like}
        repost={listPosts.repost}
      />
    ))
  );
};

export default ListPosts;
