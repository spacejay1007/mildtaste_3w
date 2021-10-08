import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import { getCookie,setCookie,deleteCookie } from "../../shared/Cookie";



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
}
export {actionCreators};