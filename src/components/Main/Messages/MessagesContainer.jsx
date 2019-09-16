import { connect } from "react-redux"
import {
  sendMessage,
  updateNewMessageBody
} from "../../../Redux/Reducers/messagesReducer";
import Messages from "./Messages"

const mapStateToProps = (state) => {
  return {
    messages : state.messagesReducer,
    newMessageBody : state.messagesReducer
  }
}

const MessagesContainer = connect (mapStateToProps, { updateNewMessageBody, sendMessage }) (Messages); 
export default MessagesContainer;
