import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";

import { getCookie, deleteCookie } from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";

const Header= (props) => {
    // const [is_login, setIslogin] = React.useState(false);
    const is_login = useSelector((state)=> (state.user.is_login));
    const dispatch = useDispatch();

    React.useEffect(() => {
        let cookie = getCookie("user_id");
        console.log(cookie);

        // if(cookie) {
        //     setIsloginr(true);
        // }else{
        //     setIslogin(false);
        // }


    })
    if(is_login){
    return(
        <React.Fragment>
            <Grid is_flex padding="16px" >
                <Grid>
                    <Text margin="0px" bold size="23px">SoccerReview</Text>
                </Grid>
                <Grid is_flex>
                    <Button text="내정보"></Button>
                    <Button text="알림"></Button>
                    <Button text="로그아웃" _onClick={()=> {
                        // deleteCookie("user_id");
                        dispatch(actionCreators.logOut({}))
                    }}></Button>
                </Grid>
            </Grid>            
        </React.Fragment>
    )
}
    return(
        <React.Fragment>
            <Grid is_flex padding="16px" >
                <Grid>
                    <Text margin="0px" bold size="23px">SoccerReview</Text>
                </Grid>
                <Grid is_flex>
                    <Button text="로그인"></Button>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>            
        </React.Fragment>
    )
};


export default Header;