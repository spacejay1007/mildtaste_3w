import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {is_flex, width, padding, margin, bg, children,center} = props;

    const styles ={
        is_flex:is_flex,
        width:width, 
        padding:padding, 
        margin:margin, 
        bg:bg,
        center:center,
    }
    return(
        <React.Fragment>
            <GridBox {...styles}>{children}</GridBox>
        </React.Fragment>
    )
}


Grid.defaultProps = {
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  children:null,
  center:false,
};

const GridBox = styled.div`
children:null;
${(props) =>
    (props.is_flex? 
    `display:flex; align-items:center; justify-content:space-between;`
: "")}
width:${(props) => props.width} ;
padding:${(props) => props.padding ? `padding:${props.padding};` : ""}
margin:${(props) => props.margin? `margin:${props.margin};` : ""}
${(props) => props.bg? `background-color:${props.bg};` :""} 
height:100%;
box-sizing:border-box;
${(props) => props.center? `text-align:center`:""}
`;



export default Grid;
