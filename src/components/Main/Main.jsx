import React from "react";
import { Route } from "react-router-dom";
import classes from "./Main.module.css";
// import Friends from "./Friends/Friends";
import MessagesContainer from "./Messages/MessagesContainer";
// import Groups from "./Groups/Groups";
// import Music from "./Music/Music";
// import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from './Profile/ProfileContainer';

const Main = props => {
  return (
    <main className={classes.main}>
      <Route
        path="/profile/:userId?"
        render={() => (
          <ProfileContainer />
        )}
      />
      {/* <Route
        path="/friends"
        render={() => <Friends
          //  friends={props.friends} 
           />}
      /> */}
      <Route
        path="/messages"
        render={() => (
          <MessagesContainer />
        )}
      />
      {/* <Route path="/groups" render={() => <Groups
      //  groups={props.groups}
        />} /> */}
      {/* <Route path="/music" render={() => <Music 
      // music={props.music} 
      />} /> */}
      {/* <Route
        path="/settings"
        render={() => <Settings 
        // settings={props.settings}
         />}
      /> */}
      <Route
        path="/users"
        render={() => (
          <UsersContainer />
        )}
      />
    </main>
  );
};

export default Main;
