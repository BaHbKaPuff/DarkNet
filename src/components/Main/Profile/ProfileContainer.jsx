import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile } from "../../../Redux/Reducers/profileReducer";
import Profile from "./Profile";
import { getUserProfile } from "../../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    getUserProfile(userId = 1401).then(data => {
      this.props.setUserProfile(data);
    });
  }

  render() { 
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

let mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  posts: state.profileReducer.posts
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(
  mapStateToProps,
  { setUserProfile }
)(WithUrlDataContainerComponent);
