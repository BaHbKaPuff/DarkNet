const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  profile: null,
  newPostText: "",
  posts: [
    {
      id: 3,
      text: "Hackers attacking",
      like: 0,
      repost: 0
    },
    {
      id: 2,
      text: "Hackers not attacking",
      like: 255,
      repost: 55
    },
    {
      id: 1,
      text: "Hackers not attacking",
      like: 2555,
      repost: 555
    }
  ]
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts[0].id + 1,
        text: state.newPostText,
        like: 0,
        repost: 0
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.postText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: { ...action.profile }
      };
    default:
      return state;
  }
};
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({
  type: UPDATE_NEW_POST_TEXT,
  postText: text
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
