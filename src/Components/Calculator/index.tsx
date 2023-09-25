import { useState } from "react";
import { Column, Padding, Row } from "../../Style/GlobalStyles";
import ButtonCalculator from "../Buttons/ButtonsCalculator";
import { Back, Card, Container, Visor } from "./style";
import logo from "../../assets/images/ON_Padrão.svg";


const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstOperand, setFirstOperand] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState<boolean>(false);

    const inputDigit = (digit: number) => {
        if (waitingForSecondOperand) {
            setDisplayValue(String(digit));
            setWaitingForSecondOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
        }
    };

    const inputDecimal = () => {
        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const toggleSign = () => {
        setDisplayValue((parseFloat(displayValue) * -1).toString());
    };
    

    const clearDisplay = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const performOperation = (nextOperator: string) => {
        const inputValue = parseFloat(displayValue);

        if (firstOperand === null) {
            setFirstOperand(inputValue);
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);
            setDisplayValue(String(result));
            setFirstOperand(result);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    const calculate = (firstOperand: number, secondOperand: number, operator: string) => {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case 'x':
                return firstOperand * secondOperand;
            case '÷':
                return firstOperand / secondOperand;
            case '%':
                return (firstOperand / 100) * secondOperand;
            default:
                return secondOperand;
        }
    };
    
    return (
        <Container>
            <Card>
                <Column>
                    <Row id="center">
                        <Back>
                            <Visor>
                                <h1>{displayValue}</h1>
                            </Visor>
                        </Back>
                    </Row>
                    <Padding padding="8px" />
                    <Row id="space-between">
                        <ButtonCalculator onClick={() => clearDisplay()} title="Ac" />
                        <ButtonCalculator title="+/-" onClick={() => toggleSign()} />
                        <ButtonCalculator title="%" onClick={() => performOperation("%")} />
                        <ButtonCalculator onClick={() => performOperation("÷")} title="÷" />
                    </Row>
                    <Padding padding="8px" />
                    <Row id="space-between">
                        <ButtonCalculator onClick={() => inputDigit(7)} title="7" />
                        <ButtonCalculator onClick={() => inputDigit(8)} title="8" />
                        <ButtonCalculator onClick={() => inputDigit(9)} title="9" />
                        <ButtonCalculator onClick={() => performOperation("x")} title="x" />
                    </Row>
                    <Padding padding="8px" />
                    <Row id="space-between">
                        <ButtonCalculator onClick={() => inputDigit(4)} title="4" />
                        <ButtonCalculator onClick={() => inputDigit(5)} title="5" />
                        <ButtonCalculator onClick={() => inputDigit(6)} title="6" />
                        <ButtonCalculator onClick={() => performOperation("-")} title="-" />
                    </Row>
                    <Padding padding="8px" />
                    <Row id="space-between">
                        <ButtonCalculator onClick={() => inputDigit(1)} title="1" />
                        <ButtonCalculator onClick={() => inputDigit(2)} title="2" />
                        <ButtonCalculator onClick={() => inputDigit(3)} title="3" />
                        <ButtonCalculator onClick={() => performOperation("+")} title="+" />
                    </Row>
                    <Padding padding="8px" />
                    <Row id="space-between">
                        <ButtonCalculator width="110" onClick={() => inputDigit(0)} title="0" />
                        <ButtonCalculator onClick={() => inputDecimal()} title="." />
                        <ButtonCalculator onClick={() => performOperation('=')} title="=" />
                    </Row>
                </Column>
            </Card>
            <Padding padding="32px" />
            <Row style={{ justifyContent: "center" }} id="center">
                <img src={logo} alt="" />
            </Row>
            <Padding padding="32px" />

        </Container>
    )
}

export default Calculator;