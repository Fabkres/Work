import { styled } from "styled-components";

interface PropsButton {
    active?: boolean
}

export const Button = styled.div<PropsButton>`
    border-radius: 5.357px;
    border: 3px solid ${props => props.active ? "black" : "#83C2E2"};
    background: ${props => props.active ? "aliceblue" : "#FFF"};
    font-weight: ${props => props.active ? "bold" : "normal"};
    display: flex;
    flex-direction: row;
    width: 25.446px;
    height: 25px;
    padding: 7.143px 10.714px;
    justify-content: center;
    gap: 1.786px;
    flex-shrink: 0;
    cursor: url("/cursor_header.png"), pointer;
    &:hover{
        background-color: aliceblue;
    }
`;