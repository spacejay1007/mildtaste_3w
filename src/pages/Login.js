import React from "react";

import Grid from "../elements/Grid";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Button from "../elements/Button";

import {setCookie,getCookie,deleteCookie} from "../shared/Cookie"
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";

const Login =(props) => {
      const dispatch = useDispatch();

        console.log(getCookie("user_id"));
    const login =() => {
        // setCookie("user_id", "Ronaldo", 3);
        // setCookie("user_pwd", 7777, 3);
        // dispatch(actionCreators.logIn({user_name:"Ronaldo"}));
        dispatch(actionCreators.loginAction({user_name:"Ronaldo"}));

    }

    return (
      <React.Fragment>
        <Grid padding="16px">
          <Text bold size="30px">
            Log In
          </Text>
        </Grid>
        <Grid padding="16px">
          <Input
            label="ID"
            placeholder="Please enter your ID"
            _onClick={() => {
              console.log("ID입력");
            }}
          />
        </Grid>
        <Grid padding="16px">
          <Input
            label="Password"
            placeholder="Please enter your password"
            _onClick={() => {
              console.log("Password 입력");
            }}
          />
        </Grid>
        <Grid padding="16px">
          <Button
            text="로그인하기"
            _onClick={() => {
              // console.log("로그인 했어!");
              login();
              
            }}
          />
        </Grid>
      </React.Fragment>
    );
}

export default Login;