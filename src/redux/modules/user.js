import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import { getCookie,setCookie,deleteCookie } from "../../shared/Cookie";
import {auth} from "../../shared/firebase"


//Action
// const LOG_IN = "LOG_IN";
const LOG_OUT =  "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

const initialState={
    user : null,
    is_login : false,

}

//Action Creator
// const logIn = createAction(LOG_IN, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}))
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));

//middlewere

const loginAction = (user) => {
    return function(dispatch, getstate, {history}) {
        console.log(history);
        // dispatch(logIn(user));
        dispatch(setUser(user));
        history.push("/");
    }
}
const signupFB = (id, pwd, user_name) => {
    return function(dispatch, getstate, {history}) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);

        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });

        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};




//reducer
export default handleActions ({
    // [LOG_IN] : (state, action) => produce(state, (draft) =>{
    //     setCookie("is_login", "success");
    //     draft.user = action.payload.user
    //     draft.is_login = true; 
    // }),
    
    [SET_USER] : (state, action) => produce(state, (draft) =>{
        setCookie("is_login", "success");
        draft.user = action.payload.user
        draft.is_login = true; 
    }),
    [GET_USER] : (state, action) => produce(state,(draft) => {


    }),
    [LOG_OUT] : (state, action) => produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
}, initialState);

const actionCreators ={
    // logIn,
    logOut,
    getUser,
    loginAction,
    setUser,
    signupFB,
}
export {actionCreators};