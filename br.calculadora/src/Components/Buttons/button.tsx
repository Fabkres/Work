import React from "react";
import { ButtonStyle } from "./style";


interface ButtonProps {
    title?: string,
    onClick?: () => void,
    type?: string
}

const isPrimary = (type: string | undefined) => {
    if(type === "primary"){
        return true
    }
    if(type === "secondary"){
        return false
    }
    
}



const Button: React.FC <ButtonProps> = ({ title, onClick, type }) => {
  

    return (
        <ButtonStyle $primary={isPrimary(type)} onClick={onClick}>
            {title}
        </ButtonStyle>
    )
}

export default Button;