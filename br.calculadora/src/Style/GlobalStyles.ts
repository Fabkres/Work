import styled from "styled-components";
import style from "./index";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
  html,
body,
#root {
    margin: 0px;
    height: 100%;
    width: 100vw;
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: "Poppins Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins Regular"),
        url("./../font/Poppins-Regular.woff") format("woff");
}

@font-face {
    font-family: "Dela Gothic Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Dela Gothic Regular"),
        url("../assets/font/DelaGothicOne-Regular.ttf") format("woff");
}

@font-face {
    font-family: "Poppins ExtraLight";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins ExtraLight"),
        url("../font/Poppins-ExtraLight.woff") format("woff");
}

@font-face {
    font-family: "Poppins Light";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins Light"), url("../font/Poppins-Light.woff") format("woff");
}

@font-face {
    font-family: "Poppins SemiBold";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins SemiBold"),
        url("../font/Poppins-SemiBold.woff") format("woff");
}

@font-face {
    font-family: "Poppins Bold";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins Bold"), url("../font/Poppins-Bold.woff") format("woff");
}

@font-face {
    font-family: "Inter Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Inter Regular"), url("../font/Inter-Regular.ttf") format("truetype");
}
`;

export default GlobalStyle;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

    #response {
        flex-direction: row;
    }
`;

export const ColumnResponse = styled.div`
    display: flex;
    flex-direction: column;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }


    @media only screen and (max-width: 1070px) {
      flex-direction: row;
    }
`;

export const RowResponse = styled.div`
    display: flex;
    flex-direction: row;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }


    @media only screen and (max-width: 1070px) {
      flex-direction: column;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

    #response {
        flex-direction: column;
    }

`;

interface PaddingAttributes {
    padding?: string,
    width?: string
}

export const Padding = styled.div<PaddingAttributes>`
    padding: ${props => props.padding || "4px"};
    width: ${props => props.width || "100%"};
`;

interface GridAttributes {
    checkMockup?: any,
}

export const Grid = styled.div<GridAttributes>`
    display: grid;
    column-gap: 15px;
    padding: 16px;
    grid-template-areas: "CD CD CD";
    grid-template-columns: ${(props) =>
           props.checkMockup.length === 4 ? "repeat(4, 24.5%)" : props.checkMockup.length === 3 ? "repeat(3, 33%)" : props.checkMockup.length === 2 ? "repeat(2, 50%)" : "repeat(2, 50%)"};

    @media (max-width: 1300px) {
        grid-template-areas: "CD CD";
        grid-template-columns: ${(props) =>
            props.checkMockup ? "repeat(2, 50%)" : "repeat(1, 100%)"};
    }

 
    @media (max-width: 360px) {
        padding-left: 0px;
        padding-right: 0px;
    }
  
`;

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    font-size: ${style.typography.font.medium};
    font-family: ${style.typography.types.inter};
`;

export const Background = styled.div`
    background-color: #EDEDED;
    opacity: 0.8;
    background-image:  linear-gradient(#DFE4E5 1.6px, transparent 1.6px), linear-gradient(to right, #DFE4E5 1.6px, #EDEDED 1.6px);
    background-size: 32px 32px;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10
`;