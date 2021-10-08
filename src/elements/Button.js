import React from "react";
import styled from "styled-components";

import Text from "./Text";
import Grid from "./Grid";

const Button = (props) => {
    const {text,padding,width,_onChange,children} = props;
    const styles = {
        text:text,
        padding:padding,
        width:width,
    }
    return(
        <React.Fragment>
            <Grid>
               <LogBtn {...styles} onClick={_onChange}>{text? text: children}</LogBtn> 
            </Grid>
        </React.Fragment>       
    )
}

Button.defaultProps={
    text:"btn_text",
    padding:"10px",
    _onChange: ()=>{},
    children:null,
    width:"100%",
}

const LogBtn = styled.button`
    background-color: #6495ED;
    border:1px solid #00008B;
    width:${(props) => props.width};
    padding:12px 2px;
    font-weight:bold;
    box-sizing:border-box;

`;

export default Button;
