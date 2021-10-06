import React from "react"

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text"

const Post = (props)=> {
    
    return(
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src}></Image>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text> 
                </Grid> 
                <Grid>
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="square" src={props.src}></Image>
                </Grid>
                <Grid>
                    <Text>{props.comment_cnt}</Text>
                </Grid>

            </Grid>
        </React.Fragment>
    )
};


Post.defaultProps ={
    user_info:{
        user_name:"ex_user_name",
        user_profile:"ex_user_img",
    },
    img_url:"https://1ndividual-jay.tistory.com/manage/setting/blog",
    contents:"ex_contents",
    comment_cnt:"ex_comment_cnt",
    insert_dt:"ex_insert_dt(11-00-00)",
}


export default Post;


