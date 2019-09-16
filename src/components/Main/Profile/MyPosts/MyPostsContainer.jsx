import { connect } from "react-redux"
import {
  addPost,
  updateNewPostText
} from "../../../../Redux/Reducers/profileReducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    newPostText : state.profileReducer.newPostText,
    listPosts : state.profileReducer.posts
  }
}

const MyPostsContainer = connect (mapStateToProps, {updateNewPostText, addPost}) (MyPosts);
export default MyPostsContainer;

