import React from "react";
import classes from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";

const Messages = props => {
  let handleClickSendMessage = () => {
    props.sendMessage();
  };

  let handleChangeMessage = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div>
      {props.messages.dialogs.map(dialog => (
        <div key={dialog.id} className={classes.dialog}>
          <span id={classes.spanID}>{dialog.name}</span>
          <Dialog messages={dialog.messages} />
        </div>
      ))}
      <div className={classes.messages}>
        <textarea
          className={classes.textareaMessage}
          name="message"
          id="1"
          cols="35"
          rows="4"
          placeholder="write message"
          value={props.messages.newMessageBody}
          onChange={handleChangeMessage}
        />
        <button
          onClick={handleClickSendMessage}
          className={classes.send_button}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
