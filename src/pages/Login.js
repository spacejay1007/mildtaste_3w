import React from "react";

import Grid from "../elements/Grid";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Button from "../elements/Button";

import {setCookie,getCookie,deleteCookie} from "../shared/Cookie"


const Login =(props) => {

        console.log(getCookie("user_id"));
    const login =() => {
        setCookie("user_id", "Ronaldo", 3);
        setCookie("user_pwd", 7777, 3);
    }

    return (
      <React.Fragment>
        <Grid padding="16px">
          <Text bold size="30px">
            로그인
          </Text>
        </Grid>
        <Grid padding="16px">
          <Input
            label="ID"
            placeholder="Please enter your ID"
            _onChange={() => {
              console.log("ID입력");
            }}
          />
        </Grid>
        <Grid padding="16px">
          <Input
            label="Password"
            placeholder="Please enter your password"
            _onChange={() => {
              console.log("Password 입력");
            }}
          />
        </Grid>
        <Grid padding="16px">
          <Button
            text="로그인하기"
            _onChange={() => {
              console.log("로그인 했어!");
              
            }}
          />
        </Grid>
      </React.Fragment>
    );
}

export default Login;