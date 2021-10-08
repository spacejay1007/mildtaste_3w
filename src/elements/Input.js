import React from "react";
import styled from "styled-components";

import Text from "./Text";
import Grid from "./Grid";

const Input = (props) => {
    const {label, placeholder, margin, _onChange} = props;
    return(
        <React.Fragment>
            <Text>{label}</Text>
            <LogInput placeholder={placeholder} onChange={_onChange} />
        </React.Fragment>
    )
};

Input.defaultProps={
    label: 'ex_text',
    placeholder : '입력해주세요',
    margin : false,
    _onChange: ()=> {},
    children:null,
    
}

const LogInput =styled.input`
    border:1px solid 00008B;
    width:100%;
    padding:10px 2px;
    box-sizing : border-box;
    margin: ${(props) => (props.margin? `margin:${props.margin};`:"")}
`;


export default Input;