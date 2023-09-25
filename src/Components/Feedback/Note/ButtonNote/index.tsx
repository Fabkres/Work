import { Button } from "./style"

interface PropsButton {
    title?: string,
    onClick?: any,
    active?: boolean
}

const ButtonNote = ({onClick, title, active}: PropsButton) => {

    return(
        <Button active={active} onClick={onClick}>
            {title}
        </Button>
    )
}

export default ButtonNote;