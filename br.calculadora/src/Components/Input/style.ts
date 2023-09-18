import { styled } from "styled-components";
import styles from "../../Style";

export const InputStyle = styled.input`
    margin: auto;
    height: 20px;
    padding: 15px;
    max-width: 150px;
    border-radius: 12px;
    border: 3px solid #83C2E2;
    cursor: url("/cursor_input.png"), text;
    background: var(--primary-gray-10, #FFF);
    width: 100%;
    width: ${props => props.width ? props.width : "auto"};
    @media only screen and (max-width: 700px) {
       max-width: 60px;
    }
`;

type PropsSize = {
    width?: string
}

export const Text = styled.div<PropsSize>`
    color: black;
    font-family: ${styles.typography.types.inter};
    font-size: 15px;
    font-style: normal;
    font-weight: bold;
    line-height: 20px; /* 125% */
    cursor: url("/cursor_input.png"), text;
    letter-spacing: 0.08px;
    @media only screen and (max-width: 700px) {
        font-size: 9px;
    }
`;

export const Size = styled.div<PropsSize>`
   /* width: auto; */
   width: auto;
   margin-right: ${props => props.width ? 100 % - props.width : 0};
   margin: 0 4px;
`;