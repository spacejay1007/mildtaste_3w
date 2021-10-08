import React from "react";
import styled from "styled-components";

import Text from "./Text";
import Grid from "./Grid";

const Button = (props) => {
    const {text,width,_onClick,children,margin} = props;
    const styles = {
        text:text,
        width:width,
        margin:margin,
    }
    return(
        <React.Fragment>
            <Grid>
               <LogBtn {...styles} onClick={_onClick}>{text? text: children}</LogBtn> 
            </Grid>
        </React.Fragment>       
    )
}

Button.defaultProps={
    text:false,
    _onClick: ()=>{},
    children:null,
    width:"100%",
    margin:false,
}

const LogBtn = styled.button`
    background-color: #6495ED;
    border:1px solid #00008B;
    width:${(props) => props.width};
    padding:12px 0px;
    font-weight:bold;
    box-sizing:border-box;
    margin:${(props) => (props.margin? `margin: ${props.margin};` : '')}

`;

export default Button;
