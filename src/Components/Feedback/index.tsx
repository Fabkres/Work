import { useState } from "react";
import { Column, Padding, Row, RowResponse } from "../../Style/GlobalStyles";
import Note from "./Note";
import { Container, Sheet, Title } from "./style";
import ButtonCalculator from "../Buttons/ButtonsCalculator";

const Feedback = () => {

    const [questionOne, setQuestionOne] = useState();
    const [questionTwo, setQuestionTwo] = useState()
    const [questionThree, setQuestionThree] = useState()
    return (
        <Container>
            <Padding padding="32px" />
            <Row style={{ justifyContent: "center" }}>
                <Title>Autoavaliação</Title>
            </Row>
            <Padding padding="32px" />
            <Sheet>
                <RowResponse>
                    <Padding padding="32px 10% 64px 12%" >
                        <Column>
                            <Row id="center">
                                <Title>
                                    Mundo “Espelho”
                                </Title>
                            </Row>
                            <Padding padding="16px" />
                            <Note value={questionOne} setValue={setQuestionOne} question="1. Eu sei reconhecer minhas forças e oportunidades para alcançar minha ‘Meta de Satisfação’ e consigo observar as fraquezas e ameaças que podem impedir o seu alcance." />
                            <Note value={questionTwo} setValue={setQuestionTwo} question="2. Eu sei o que é uma proposta de valor, reconheço que a minha ideia de negócio tem uma proposta de valor de fácil entendimento e eu estou satisfeito com ela." />
                            <Note value={questionThree} setValue={setQuestionThree} question="3. Eu tenho domínio sobre o canvas (modelo de negócio) da minha proposta." />
                            <Padding padding="16px" />
                            <Row id="center">
                                <ButtonCalculator width="250" title="Próximo Mundo" />
                            </Row>
                        </Column>
                    </Padding>
                </RowResponse>
            </Sheet>
            <Padding padding="16px"/>
        </Container>
    )
}

export default Feedback;