import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";
import { getUsers } from "../../../api/api";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
} from "../../../Redux/Reducers/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.toggleIsFetching(false);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
    });
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          setCurrentPage={this.props.setCurrentPage}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    isFetching: state.usersReducer.isFetching,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    setCurrentPage: state.usersReducer.setCurrentPage
  };
};

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount
  }
)(UsersContainer);
