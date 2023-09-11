import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Column,
    Padding,
    Row,
    RowResponse,
} from "../../Style/GlobalStyles";
import Note from "./Note";
import {
    Container,
    Sheet,
    Title,
} from "./style";
import ButtonCalculator from "../Buttons/ButtonsCalculator";

const Feedback: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [questionOne, setQuestionOne] = useState<number | undefined>(undefined);
    const [questionTwo, setQuestionTwo] = useState<number | undefined>(undefined);
    const [questionThree, setQuestionThree] = useState<number | undefined>(undefined);
    const [questionFour, setQuestionFour] = useState<number | undefined>(undefined);
    const [questionFive, setQuestionFive] = useState<number | undefined>(undefined);

    const nome_but = "Próximo Mundo";
    const navigate = useNavigate();

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        if (
            questionOne !== undefined &&
            questionTwo !== undefined &&
            questionThree !== undefined &&
            questionFour !== undefined &&
            questionFive !== undefined
        ) {
            alert("Enviando " + questionOne + ", " + questionTwo);
            navigate("/tasks");
        } else {
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    };

    return (
        <Container>
            <Padding padding="32px" />
            <Row style={{ justifyContent: "center" }}>
                <Title>Autoavaliação</Title>
            </Row>
            <Padding padding="32px" />
            <Sheet>
                <RowResponse>
                    <Padding padding="100px 10% 64px 12%">
                        <Column>
                            <Row id="center">
                                <Title>
                                    {step === 1 ? "Mundo 'Espelho'" : "Mundo 'Navio'"}
                                </Title>
                            </Row>
                            <Padding padding="16px" />
                            {step === 1 && (
                                <>
                                    <Note
                                        value={questionOne}
                                        setValue={setQuestionOne}
                                        question="1. Eu sei reconhecer minhas forças e oportunidades para alcançar minha ‘Meta de Satisfação’ e consigo observar as fraquezas e ameaças que podem impedir o seu alcance."
                                    />
                                    <Note
                                        value={questionTwo}
                                        setValue={setQuestionTwo}
                                        question="2. Eu sei o que é uma proposta de valor, reconheço que a minha ideia de negócio tem uma proposta de valor de fácil entendimento e eu estou satisfeito com ela."
                                    />
                                    <Note
                                        value={questionThree}
                                        setValue={setQuestionThree}
                                        question="3. Eu tenho domínio sobre o canvas (modelo de negócio) da minha proposta."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <Note
                                        value={questionFour}
                                        setValue={setQuestionFour}
                                        question="4. Eu sei reconhecer minhas forças e oportunidades para alcançar minha ‘Meta de Satisfação’ e consigo observar as fraquezas e ameaças que podem impedir o seu alcance."
                                    />
                                    <Note
                                        value={questionFive}
                                        setValue={setQuestionFive}
                                        question="5. Eu sei o que é uma proposta de valor, reconheço que a minha ideia de negócio tem uma proposta de valor de fácil entendimento e eu estou satisfeito com ela."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <Padding padding="16px" />
                                </>
                            )}
                            <Padding padding="16px" />
                            <Row id="center">
                                {(step > 1 && step <= 5) && (
                                    <ButtonCalculator
                                        width="250"
                                        title="Voltar"
                                        onClick={handlePrevStep}
                                    />
                                )}
                                {(step > 0 && step < 5) && (
                                    <ButtonCalculator
                                        width="250"
                                        title={nome_but}
                                        onClick={handleNextStep}
                                    />
                                )}
                                {step === 5 && (
                                    <>
                                        <ButtonCalculator
                                            width="250"
                                            title="Submeter"
                                            onClick={handleSubmit}
                                        />
                                    </>
                                )}
                            </Row>
                        </Column>
                    </Padding>
                </RowResponse>
            </Sheet>
            <Padding padding="16px" />
        </Container>
    );
};

export default Feedback;
