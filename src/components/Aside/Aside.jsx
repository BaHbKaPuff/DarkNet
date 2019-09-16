import React from 'react';
import classes from './Aside.module.css';

const Aside = (props) => {
  console.log(props)
  return (
    <div className={classes.aside}>
      <h4>Friends</h4>
        {props.friendsAside.map((friend) =>
        <div key={friend.id} className={classes.news}>
          <img src={friend.avatar} alt="avatar_photo" className={classes.news_img} />
          {friend.name}
        </div>
      )}
    </div>
  );
};
export default Aside;