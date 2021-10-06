import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {children, size, bold, color } = props;

    const styles = {
        bold:bold,
        size:size,
        color:color,
    }
    return(
        <React.Fragment>
            <TextStyle {...styles}>{children}</TextStyle>
        </React.Fragment>
        
    );
}

Text.defaultProps={
    children: null,
    size: "12px",
    bold: false,
    color: "#00008B",
}

const TextStyle=styled.div`
    font-size:${(props) => props.size};
    color:${(props) => props.color};
    font-weight:${(props) => (props.bold? "700" :"400" )};
`;

export default Text;