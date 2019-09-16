import React from "react";
import classes from "./Profile.module.css";
import ListPosts from "./Post/ListPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import avatar from "../../../img/Vendetta.jpg";
import findJob from "../../../img/JobSmile.jpg";
import noFindJob from "../../../img/StupedSmile.jpg";
import Preloader from "../../Preloader/Preloader";

const Profile = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  let userAvatar = props.profile.photos.large;
  let job = props.profile.lookingForAJob;
  
  return (
    <div className={classes.profile}>
      <div className={classes.fon_img}>
        <section className={classes.main_header}>
          <div>
            <img
              className={classes.avatar}
              src={userAvatar || avatar}
              alt="avatar"
            />
          </div>
          <div>
            <div>Name: {props.profile.fullName}</div>
            <div>aboutMe: {props.profile.aboutMe}</div>
            <div className={classes.job}>
              lookingForAJob:{" "}
              {job ? (
                <img src={findJob} alt="smile" />
              ) : (
                <img src={noFindJob} alt="smile" />
              )}
            </div>
            <div>
              Contacts={"facebook"}
            </div>
          </div>
        </section>
        <div className={classes.main_footer}>
          <MyPostsContainer />
        </div>
      </div>
      <ListPosts listPosts={props.posts} />
    </div>
  );
};
export default Profile;
