import React from "react";
import styled from "styled-components";


const Image =(props) => {
    const {shape, size, src} =props;
    const styles = {
        size:size,
        src:src,
    }

    if(shape === "circle") {
        return(
        <CircleImage {...styles}></CircleImage>
        );
    }

    if(shape === "square") {
        return(
            <ImageOutter>
                <SquareImage {...styles}></SquareImage>
            </ImageOutter>
        )
    }
    return(
        <React.Fragment>
            
        </React.Fragment>     
    );
}

Image.defaultProps ={
    shape:"circle",
    size: 30,
    src:"https://cdn.footballist.co.kr/news/photo/202104/132341_58369_1215.jpg",
};

const CircleImage = styled.div`
    --size:${(props)=> props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size:cover;
`;
const ImageOutter=styled.div`
    width:100%;
    min-width:300px;
`;

const SquareImage = styled.div`
    padding-top:80%;
    overflow:hidden;
    position:relative;
    border-radius: 4px;
    background-image: url("${(props) => props.src}");
    background-size:cover;
`;
export default Image;