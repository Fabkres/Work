import { styled } from "styled-components";
import backgroundBody from "../../assets/images/SubtractBody.png";
import rows from "../../assets/images/rows.png";


import styles from "../../Style";


export const Pratica = styled.div`
    border-radius: 49px;
    background-color: #F8FAE4;
    height: auto;
    width: 80%;
    padding: 36px;
`;

interface PropsIconPlus {
    color?: string
}


export const IconPlus = styled.div<PropsIconPlus>`
    color: ${props => props.color ? props.color : "black"};
    font-family: ${styles.typography.types.daleRegular};
    font-size: 57.022px;
    font-style: normal;
    font-weight: 400;
    line-height: 42.766px; /* 75% */
    letter-spacing: 0.285px;
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

export const TitleSmall = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 42.766px; /* 75% */
    letter-spacing: 0.285px;
    @media only screen and (max-width: 1070px) {
       display: flex;
       flex-direction: column;
       font-size: 24px;
    }
    
`;


export const BackgroundBody = styled.div`
    border-radius: 49px;
    background: url(${backgroundBody});
    background-size: 100%;
    height: auto;
    width: 100%;
    background-size: 100%;
    object-fit: cover;
    @media only screen and (max-width: 1070px) {
       background: #f8fae4;
       width: auto;
    }

    @media only screen and (max-width: 600px) {
       background: #f8fae4;
       width: 120%;
    }

`;

export const Rows = styled.div`
    background: url(${rows});
    background-size: 100%;
    height: auto;
    margin: 5% auto;
    max-height: 80%;

    width: 100%;
    background-size: 100%;
    object-fit: cover;

    /* @media only screen and (max-width: 1200px) {
       background: #f8fae4;
    } */

`;




export const Container = styled.div`
    height: auto;
    width: 60%;
    @media only screen and (max-width: 1070px) {
      width: 100%;
    }
`;

export const RowRed = styled.div`
    width: 1px;
    background: red; 
    margin-left: 12%;

     @media only screen and (max-width: 1070px) {
      margin-top: 8%;
      width: 100%;
      height: 1px;
      margin-left: 0;
    }

    @media only screen and (max-width: 600px) {
      margin-top: 10%;
      width: 100%;
      height: 1px;
      margin-left: 0;
    }
    
`;