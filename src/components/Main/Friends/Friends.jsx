import React from 'react';
import classes from './Friends.module.css';

const Friends = (props) => {
  let friends = props.friends.friendsPage;
  
  return (
    <div className={classes.conteinerFriends}>
      {friends.map((friend) =>
        <div key={friend.id} className={classes.friends}>
          <img src={friend.avatar} alt="my_photo" className={classes.friends_img} />
          <span>{friend.name}</span>
        </div>
      )}
    </div>
  );
};
export default Friends;