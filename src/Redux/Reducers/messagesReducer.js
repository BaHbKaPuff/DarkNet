const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Adam",
      messages: [
        { id: 0, messageText: "Agov" },
        { id: 1, messageText: "Byrbak?" },
        { id: 2, messageText: "Yes I am)" }
      ]
    },
    { id: 2, name: "Marry", messages: [{ id: 0, messageText: "Hai" }] },
    {
      id: 3,
      name: "KelvinKlein",
      messages: [{ id: 0, messageText: "Yo" }]
    },
    { id: 4, name: "Messi", messages: [{ id: 0, messageText: "Ky" }] }
  ],
  newMessageBody: ""
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      const newMessage = {
        id: state.dialogs[0].messages.length,
        messageText: body
      };
      return {
        ...state,
        dialogs: [
          {
            ...state.dialogs[0],
            messages: [...state.dialogs[0].messages, newMessage]
          },
          {...state.dialogs[1]},
          {...state.dialogs[2]},
          {...state.dialogs[3]}
        ],
        
        newMessageBody: ""
      };
    case UPDATE_NEW_MESSAGE_BODY:
      // stateCopy.newMessageBody = action.body;
      return {
        ...state,
        newMessageBody: action.body
      };
    default:
      return state;
  }
};
export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body
});
export default messagesReducer;
