import React from "react";
import Login from "./Login";
import { getIsLogin } from "../../../api/api";
import { connect } from "react-redux";
import setAuthUserData from "./../../../Redux/Reducers/authLoginReducer";

class LoginContainer extends React.Component {
  componentDidMount() {
    getIsLogin().then(response => {
      debugger;
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isLogin: state.authLoginReducer.isLogin,
  login: state.authLoginReducer.login
});

export default connect(
  mapStateToProps,
  { setAuthUserData }
)(LoginContainer);
