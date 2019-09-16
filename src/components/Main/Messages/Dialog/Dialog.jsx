import React from "react";
import classes from "./Dialog.module.css";


const Dialog = (props) => {
  return (
    <div className={classes.dialog}>
      {props.messages.map((message) =>
        <div key={message.id} className={classes.message}>
          <ul>
            <li><span>{message.messageText}</span></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dialog;