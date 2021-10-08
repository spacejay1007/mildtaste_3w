import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";


const Header= (props) => {

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