import React from "react"
import Grid from "../elements/Grid";
import Text from "../elements/Text"
import Input from "../elements/Input";
import Button from "../elements/Button";
const Signup = (props) => {

    return(
        <React.Fragment>
            <Grid padding="16px">
                <Text bold size="30px">회원가입</Text>
            </Grid>
            <Grid padding="16px" >
                <Input label="ID" 
                placeholder="아이디를 입력해주세요"
                _onChange={() => {
                    console.log("아이디입력")
                }}></Input>
            
                <Input label="Nickname" 
                placeholder="닉네임을 입력해주세요"
                _onChange={() => {
                    console.log("닉네임입력")
                }}></Input>


                <Input label="Password" 
                placeholder="비밀번호를 입력해주세요" 
                _onChange={() => {
                    console.log("비밀번호 입력")
                }}></Input>

                <Input label="PasswordConfirm" 
                placeholder="비밀번호를 다시한번 입력해주세요"
                _onChange={() => {
                    console.log("비밀번호 확인")
                }}></Input>
            </Grid>
            <Grid padding="16px">
                <Button text="회원가입하기" _onChange={()=>{
                    console.log("회원가입하셨습니다.")
                }}></Button>                
            </Grid>
        </React.Fragment>
    )
}

export default Signup;