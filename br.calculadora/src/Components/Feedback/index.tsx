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
    Title2,
} from "./style";
import ButtonCalculator from "../Buttons/ButtonsCalculator";
import Activity from "../Tasks/Activity/Actvity";


const Feedback: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [questionOne, setQuestionOne] = useState<number | undefined>(undefined);
    const [questionTwo, setQuestionTwo] = useState<number | undefined>(undefined);
    const [questionThree, setQuestionThree] = useState<number | undefined>(undefined);
    const [questionFour, setQuestionFour] = useState<number | undefined>(undefined);
    const [questionFive, setQuestionFive] = useState<number | undefined>(undefined);
    const [questionSix, setQuestionSix] = useState<number | undefined>(undefined);
    const [questionSeven, setQuestionSeven] = useState<number | undefined>(undefined);
    const [questionEight, setQuestionEight] = useState<number | undefined>(undefined);
    const [questionNine, setQuestionNine] = useState<number | undefined>(undefined);
    const [questionTen, setQuestionTen] = useState<number | undefined>(undefined);
    const [questionEleven, setQuestionEleven] = useState<number | undefined>(undefined);
    const [questionTwelve, setQuestionTwelve] = useState<number | undefined>(undefined);
    const [questionThirteen, setQuestionThirteen] = useState<number | undefined>(undefined);
    const [questionFourteen, setQuestionFourteen] = useState<number | undefined>(undefined);
    const [questionFiveteen, setQuestionFiveteen] = useState<number | undefined>(undefined);
    const [questionSixteen, setQuestionSixteen] = useState<number | undefined>(undefined);
    const [questionSeventeen, setQuestionSeventeen] = useState<number | undefined>(undefined);
    const [questionEighteen, setQuestionEighteen] = useState<number | undefined>(undefined);
    const [questionNineteen, setQuestionNineteen] = useState<number | undefined>(undefined);
    const [questionTwenty, setQuestionTwenty] = useState<number | undefined>(undefined);
    const [questionTwentyOne, setQuestionTwentyOne] = useState<number | undefined>(undefined);
    const [questionTwentyTwo, setQuestionTwentyTwo] = useState<number | undefined>(undefined);
    const [questionTwentyThree, setQuestionTwentyThree] = useState<number | undefined>(undefined);
    const [questionTwentyFour, setQuestionTwentyFour] = useState<number | undefined>(undefined);
    const [questionTwentyFive, setQuestionTwentyFive] = useState<number | undefined>(undefined);
    const [questionTwentySix, setQuestionTwentySix] = useState<number | undefined>(undefined);

    const nome_but = "Próximo Mundo";
    const navigate = useNavigate();

    // Segue os botões + validação + próximas etapas

    const isStep1Valid = () => {
        return (
            questionOne !== undefined &&
            questionTwo !== undefined &&
            questionThree !== undefined
        );
    };

    const isStep2Valid = () => {
        return (
            questionFour !== undefined &&
            questionFive !== undefined &&
            questionSix !== undefined
        );
    };

    const isStep3Valid = () => {
        return (
            questionSeven !== undefined &&
            questionEight !== undefined &&
            questionNine !== undefined
        );

    };
    const isStep4Valid = () => {
        return (

            questionTen !== undefined &&
            questionEleven !== undefined &&
            questionTwelve !== undefined
        );

    };
    const isStep5Valid = () => {
        return (
            questionThirteen !== undefined &&
            questionFourteen !== undefined &&
            questionFiveteen !== undefined
        );

    };
    const isStep6Valid = () => {
        return (
            questionSixteen !== undefined &&
            questionSeventeen !== undefined &&
            questionEighteen !== undefined
        );

    };
    const isStep7Valid = () => {
        return (
            questionNineteen !== undefined &&
            questionTwenty !== undefined &&
            questionTwentyOne !== undefined
        );

    };
    const isStep8Valid = () => {
        return (
            questionTwentyTwo !== undefined &&
            questionTwentyThree !== undefined &&
            questionTwentyFour !== undefined
        );

    };

    // Analisnado os botões:
    const handleNextStep = () => {
        switch (step) {
            case 1:
                if (isStep1Valid()) {
                    setStep(step + 1);
                } else {
                    alert("Por favor, preencha todos os campos antes de avançar.");
                }
                break;
            case 2:
                if (isStep2Valid()) {
                    setStep(step + 1);
                } else {
                    alert("Por favor, preencha todos os campos antes de avançar.");
                }
                break;
            case 3:
                if (isStep3Valid()) {
                    setStep(step + 1);
                } else {
                    alert("Por favor, preencha todos os campos antes de avançar.");
                }
                break;
            case 4:
                if (isStep3Valid()) {
                    setStep(step + 1);
                } else {
                    alert("Por favor, preencha todos os campos antes de avançar.");
                }
                break;
            case 5:
                if (isStep3Valid()) {
                    setStep(step + 1);
                } else {
                    alert("Por favor, preencha todos os campos antes de avançar.");
                }
                break;
            case 6:
                if (isStep3Valid()) {
                    setStep(step + 1);
                } else {
                    alert("Por favor, preencha todos os campos antes de avançar.");
                }
                break;
            case 7:
                if (isStep3Valid()) {
                    setStep(step + 1);
                } else {
                    alert("Por favor, preencha todos os campos antes de avançar.");
                }
                break;
            case 8:
                if (isStep3Valid()) {
                    setStep(step + 1);
                } else {
                    alert("Por favor, preencha todos os campos antes de avançar.");
                }
                break;
            // Adicione casos para as outras etapas
            default:
                break;
        }
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        if (
            questionTwentyFive !== undefined &&
            questionTwentySix !== undefined
        ) {
            alert("Enviando " + questionOne + ", " + questionTwo);
            // navigate("/tasks");
            const questionsData = getAllQuestions();
            navigate("/tasks", { state: { questions: questionsData } });
        } else {
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    };

    const getAllQuestions = () => {
        return {
            "Mundo Espelho": [
                questionOne,
                questionTwo,
                questionThree,
            ],
            "Mundo Meu Lugar": [
                questionFour,
                questionFive,
                questionSix,
            ],
            "Mundo Inspira": [
                questionSeven,
                questionEight,
                questionNine,
            ],
            "Mundo Descoberta": [
                questionTen,
                questionEleven,
                questionTwelve,
            ],
            "Mundo Faz Negócios": [
                questionThirteen,
                questionFourteen,
                questionFiveteen,
            ],
            "Mundo Na Jornada": [
                questionSixteen,
                questionSeventeen,
                questionEighteen,
            ],
            "Mundo Minha História": [
                questionNineteen,
                questionTwenty,
                questionTwentyOne,
            ],
            "Mundo Na Prática": [
                questionTwentyTwo,
                questionTwentyThree,
                questionTwentyFour,
            ],
        };
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
                    <Padding padding="170px 10% 64px 12%">
                        <Column>
                            <Row id="center">
                                <Title>
                                    {(() => {
                                        switch (step) {
                                            case 1:
                                                return "Mundo 'Espelho'";
                                            case 2:
                                                return "Mundo 'Meu Lugar'";
                                            case 3:
                                                return "Mundo 'Inspira'";
                                            case 4:
                                                return "Mundo 'Descoberta'";
                                            case 5:
                                                return "Mundo 'Faz Negócios'";
                                            case 6:
                                                return "Mundo 'Na Jornada'";
                                            case 7:
                                                return "Mundo 'Minha História'";
                                            case 8:
                                                return "Mundo 'Na Prática'";
                                            case 9:
                                                return "Mundo 'Próxima Parada'";
                                            default:
                                                return ""; // Lidar com o caso padrão, se necessário
                                        }
                                    })()}
                                </Title>
                            </Row>
                            <Padding padding="16px" />

                            <Activity questions={getAllQuestions()} />


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
                                        question="4. Eu reconheço as características e diferenciais do meu negócio, e percebo que meus gostos pessoais estão refletidos na sua identidade."
                                    />
                                    <Note
                                        value={questionFive}
                                        setValue={setQuestionFive}
                                        question="5. Eu reconheço com facilidade quais são os pontos positivos e de melhoria do lugar onde vivo, e sei do seu impacto na minha ideia de negócio."
                                    />
                                    <Note
                                        value={questionSix}
                                        setValue={setQuestionSix}
                                        question="6. O lugar onde vivo é representado pelo nome da minha ideia de negócio e eu estou satisfeito com esse nome."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}
                            {step === 3 && (
                                <>
                                    <Note
                                        value={questionSeven}
                                        setValue={setQuestionSeven}
                                        question="7. Eu sei que existem outras iniciativas que tem produtos/serviços iguais ou parecidos com os meus e reconheço que se inspirar em outras iniciativas é importante para realizar meu trabalho."
                                    />
                                    <Note
                                        value={questionEight}
                                        setValue={setQuestionEight}
                                        question="8. Eu já conheci presencialmente outras iniciativas que têm produtos/serviços iguais ou parecidos com os meus."
                                    />
                                    <Note
                                        value={questionNine}
                                        setValue={setQuestionNine}
                                        question="9. Eu sei o que é um negócio social, entendo a importância dele para o impacto na comunidade e reconheço que a minha ideia se enquadra nessa categoria."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}


                            {step === 4 && (
                                <>
                                    <Note
                                        value={questionTen}
                                        setValue={setQuestionTen}
                                        question="10. Reconheço o que faço atualmente e sei quais são as melhorias que precisam ser colocadas em prática para melhorar minha ideia de negócio."
                                    />
                                    <Note
                                        value={questionEleven}
                                        setValue={setQuestionEleven}
                                        question="11. Sei descrever facilmente as forças, fraquezas, oportunidades e ameaças que estão relacionadas à minha ideia de negócio."
                                    />
                                    <Note
                                        value={questionTwelve}
                                        setValue={setQuestionTwelve}
                                        question="12. Sei descrever e registrar com facilidade todos os custos e tudo que está envolvido no processo de produção/preparação dos meus produtos/serviços."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}



                            {step === 5 && (
                                <>
                                    <Note
                                        value={questionThirteen}
                                        setValue={setQuestionThirteen}
                                        question="13. Reconheço de maneira detalhada os diferentes desafios de empreender e sei das responsabilidades que estão envolvidas nesse processo."
                                    />
                                    <Note
                                        value={questionFourteen}
                                        setValue={setQuestionFourteen}
                                        question="14. Sei descrever e já tenho mapeado o perfil do cliente da minha ideia de negócio."
                                    />
                                    <Note
                                        value={questionFiveteen}
                                        setValue={setQuestionFiveteen}
                                        question="15. Sei descrever e já tenho registrado o passo a passo de como o meu cliente chega até o meu negócio."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}

                            {step === 6 && (
                                <>
                                    <Note
                                        value={questionSixteen}
                                        setValue={setQuestionSixteen}
                                        question="16. Sei quais são todos os meus produtos/serviços e tenho todos eles registrados, organizados e acessível aos clientes."
                                    />
                                    <Note
                                        value={questionSeventeen}
                                        setValue={setQuestionSeventeen}
                                        question="17. Tenho segurança na hora de calcular o preço de todos os meus produtos/serviços considerando custos, possibilidades de receitas, pagamento pelo trabalho e lucro."
                                    />
                                    <Note
                                        value={questionEighteen}
                                        setValue={setQuestionEighteen}
                                        question="18. Estou satisfeito com o preço dos produtos/serviços que vendo, pois eles representam os custos, pagamento pelo meu trabalho e o lucro."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}


                            {step === 7 && (
                                <>
                                    <Note
                                        value={questionNineteen}
                                        setValue={setQuestionNineteen}
                                        question="19. Eu reconheço que a minha história está bastante conectada com a minha ideia de negócio e utilizo essa história nas minhas estratégias de venda e divulgação do produto."
                                    />
                                    <Note
                                        value={questionTwenty}
                                        setValue={setQuestionTwenty}
                                        question="20. Eu reconheço que sei vender e tenho boas estratégias de vendas."
                                    />
                                    <Note
                                        value={questionTwentyOne}
                                        setValue={setQuestionTwentyOne}
                                        question="21. Eu já apresentei um pitch e tenho minha ideia de negócio organizada em formato de apresentação."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}


                            {step === 8 && (
                                <>
                                    <Note
                                        value={questionTwentyTwo}
                                        setValue={setQuestionTwentyTwo}
                                        question="22. Eu sei planejar corretamente antes de testar uma ideia nova ou antes de implementar um produto/serviço novo e utilizo a metodologia de “Plano de Ação”."
                                    />
                                    <Note
                                        value={questionTwentyThree}
                                        setValue={setQuestionTwentyThree}
                                        question="23. Eu já testei corretamente os meus produtos/serviços e acredito que não preciso testar novamente."
                                    />
                                    <Note
                                        value={questionTwentyFour}
                                        setValue={setQuestionTwentyFour}
                                        question="24. Eu sei analisar os resultados de um teste de produtos/serviços e estou satisfeito/a com a abordagem que utilizo."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}
                            {step === 9 && (
                                <>
                                    <Title2>Para quem ainda não tem CNPJ:</Title2>
                                    <Note
                                        value={questionTwentyFive}
                                        setValue={setQuestionTwentyFive}
                                        question="25. Eu sei qual a real importância de formalizar o meu negócio (de abrir um CNPJ) e sei quais caminhos devo seguir para fazer esse registro."
                                    />
                                    <Padding padding="16px" />
                                    <Title2>Para quem já tem CNPJ:</Title2>
                                    <Note
                                        value={questionTwentySix}
                                        setValue={setQuestionTwentySix}
                                        question="26. Eu tenho um negócio formalizado e sei até onde posso chegar, pois tenho um planejamento estratégico para a expansão."
                                    />
                                    <Padding padding="16px" />
                                </>
                            )}

                            <Padding padding="16px" />
                            <Row id="center">
                                {step > 1 && step <= 9 && (
                                    <ButtonCalculator
                                        width="250"
                                        title="Voltar"
                                        onClick={handlePrevStep}
                                    />
                                )}
                                {step > 0 && step < 9 && (
                                    <ButtonCalculator
                                        width="250"
                                        title={nome_but}
                                        onClick={handleNextStep}
                                    />
                                )}
                                {step === 9 && (
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
