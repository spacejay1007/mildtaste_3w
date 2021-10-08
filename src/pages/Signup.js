import React from "react"
import Grid from "../elements/Grid";
import Text from "../elements/Text"
import Input from "../elements/Input";
import Button from "../elements/Button";

import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";


const Signup = (props) => {
    const dispatch = useDispatch();
    const[id, setId] = React.useState("");
    const[pwd, setPwd] = React.useState("");
    const[user_name, setUserName] = React.useState("");
    const[pwd_check, setPwdCheck] = React.useState("");

    const signup = () => {
        // id , pwd , user_name 이 공백이면 return
        if( id === "" || pwd === "" || user_name === ""){
            return;
        }

        // pwd , pwd_check 가 다르면 return
        if( pwd !== pwd_check) {
            return;
        }

        dispatch(actionCreators.signupFB(id,pwd,user_name)); 
    }

    return(
        <React.Fragment>
            <Grid padding="16px">
                <Text bold size="30px">Sign Up</Text>
            </Grid>
            <Grid padding="16px" >
                <Input label="ID" 
                placeholder="Please enter your ID"
                _onChange={(e) => {
                    setId(e.target.value);
                    console.log("아이디입력")
                }}></Input>
            
                <Input label="Nickname" 
                placeholder="Please enter your Nickname"
                _onChange={(e) => {
                    setUserName(e.target.value);
                    console.log("닉네임입력")
                }}></Input>


                <Input label="Password" 
                placeholder="Please enter your Password" 
                _onChange={(e) => {
                    setPwd(e.target.value);
                    console.log("비밀번호 입력")
                }}></Input>

                <Input label="PasswordConfirm" 
                placeholder="Please enter your password"
                _onChange={(e) => {
                    setPwdCheck(e.target.value);
                    console.log("비밀번호 확인")
                }}></Input>
            </Grid>
            <Grid padding="16px">
                <Button text="회원가입하기" _onClick={()=>{
                    console.log("회원가입하셨습니다.")
                    signup();
                }}></Button>                
            </Grid>
        </React.Fragment>
    )
}

export default Signup;