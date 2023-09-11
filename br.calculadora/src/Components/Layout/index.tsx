import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/button";
import { Background, Container, Padding, Row } from "../../Style/GlobalStyles";
import vectorLeft from "../../assets/images/vector-left.svg";
import vectorTop from "../../assets/images/vector-top.svg";
import vectorRight from "../../assets/images/vector-right.svg";
import { VectorLeft, VectorRight, VectorTop, Stack } from "./style";

interface Props {
    children: React.ReactNode;
    set: React.Dispatch<React.SetStateAction<number>>;
    value?: number;
}

const Layout = ({ children, set, value }: Props) => {
    const getButtonStateFromStorage = () => {
        const storedState = localStorage.getItem("buttonState");
        if (storedState !== null) {
            return parseInt(storedState, 10);
        }
        return value || 0;
    };

    useEffect(() => {
        const storedButtonState = getButtonStateFromStorage();
        set(storedButtonState);
    }, [set]);

    // Função para atualizar o estado do botão e armazená-lo no localStorage
    const updateButtonState = (newValue: number) => {
        set(newValue);
        localStorage.setItem("buttonState", newValue.toString());
    };

    return (
        <div style={{ width: "100%", height: "100%", position: "fixed" }}>
            <Stack>
                <Background />
                <VectorLeft>
                    <img alt="" src={vectorLeft} />
                </VectorLeft>
                <VectorTop>
                    <img alt="" src={vectorTop} />
                </VectorTop>
                <VectorRight>
                    <img alt="" src={vectorRight} />
                </VectorRight>
                <Container>
                    <Padding padding="32px">
                        <Row id="space-between">
                            <>
                                <Link to="/">
                                    <Button
                                        title={"Calculadora"}
                                        onClick={() => updateButtonState(0)}
                                        type={value === 0 ? "primary" : "secondary"}
                                    />
                                </Link>
                                <Link to="/autoavaliacao">
                                    <Button
                                        title={"Autoavaliação"}
                                        onClick={() => updateButtonState(1)}
                                        type={value === 1 ? "primary" : "secondary"}
                                    />
                                </Link>
                            </>
                        </Row>
                        {children}
                    </Padding>
                </Container>
            </Stack>
        </div>
    );
};

export default Layout;
