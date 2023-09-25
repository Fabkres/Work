import { styled } from "styled-components";


export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 1070px) {
       display: flex;
       flex-direction: column;
    }
`;

export const ContainerHome = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
`;