import { styled } from "styled-components";
import backgroundBody from "../../assets/images/SubtractBody.png";
import styles from "../../Style";


export const Sheet = styled.div`
    border-radius: 49px;
    background: url(${backgroundBody});
    height: auto;
    margin: auto;
    width: 70%;
    background-size: 100%;
    object-fit: cover;
    @media only screen and (max-width: 1070px) {
       background: #f8fae4;
       width: auto;
    }

    @media only screen and (max-width: 600px) {
       background: #f8fae4;
       width: 200%;
    }

`;

export const Title = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 50.022px;
    font-style: normal;
    font-weight: 400;
    line-height: 42.766px; /* 75% */
    letter-spacing: 0.285px;
    @media only screen and (max-width: 1100px) {
       display: flex;
       flex-direction: column;
       font-size: 32px;
    }
    
`;


export const Container = styled.div`
    height: auto;
    width: 100%;
    @media only screen and (max-width: 1070px) {
      width: 100%;
    }
`;