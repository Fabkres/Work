import { Padding, RowResponse } from "../../../Style/GlobalStyles";
import ButtonNote from "./ButtonNote";
import { Question } from "./style";

interface PropsNote {
    question?: string,
    value?: number,
    setValue?: any
}

const Note = ({ question, setValue, value }: PropsNote) => {


    return (
        <div>
            <Padding />
            <Question>
                {question}
            </Question>
            <Padding />
            <RowResponse>
                <ButtonNote active={value === 1} onClick={() => setValue(1)} title="1" />
                <Padding  padding="2px" />
                <ButtonNote active={value === 2} onClick={() => setValue(2)}  title="2" />
                <Padding padding="2px" />
                <ButtonNote active={value === 3} onClick={() => setValue(3)}  title="3" />
                <Padding padding="2px" />
                <ButtonNote active={value === 4} onClick={() => setValue(4)}  title="4" />
                <Padding padding="2px" />
                <ButtonNote active={value === 5} onClick={() => setValue(5)}  title="5" />
                <Padding padding="2px" />
                <ButtonNote active={value === 6} onClick={() => setValue(6)}  title="6" />
                <Padding padding="2px" />
                <ButtonNote active={value === 7} onClick={() => setValue(7)}  title="7" />
                <Padding padding="2px" />
                <ButtonNote active={value === 8} onClick={() => setValue(8)}  title="8" />
                <Padding padding="2px" />
                <ButtonNote active={value === 9} onClick={() => setValue(9)}  title="9" />
                <Padding padding="2px" />
                <ButtonNote active={value === 10} onClick={() => setValue(10)}  title="10" />
            </RowResponse>
        </div>
    )
}

export default Note;