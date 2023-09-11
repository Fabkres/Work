import React from "react";
import { Back, Buttons } from "./style";

interface PropsAttributes {
    title?: string,
    onClick?: () => void,
    width?: string
}

const ButtonCalculator: React.FC<PropsAttributes> = ({ title, onClick, width }) => {
    const handleClick = () => {

        console.log(`O botão "${title}" foi clicado.`);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div onClick={handleClick}>
            <Back width={width} >
                <Buttons width={width}>
                    <h1>{title}</h1>
                </Buttons>
            </Back>
        </div>
    );
};

export default ButtonCalculator;
