import React from 'react'
import ResultComponent from '../../Models'



const atividadesPorMundo = {
    "Mundo Espelho": [
        "Swot Pessoal",
        "Proposta De Valor",
        "Canvas",
    ],
    "Mundo Meu Lugar": [
        "Identidade",
        "Descrevendo Meu Lugar",
        "Nome Do Meu Negócio",
    ],
    "Mundo Inspira": [
        "Pesquisando Referências",
        "Visitando Quem Faz",
        "Negócio Social?",
    ],
    "Mundo Descoberta": [
        "Como É Hoje E Como Poderia Ser?",
        "Swot Adaptada",
        "Minha Receita",
    ],
    "Mundo Faz Negócios": [
        "Game On",
        "Raio-X Do Cliente",
        "Jornada Do Cliente",
    ],
    "Mundo Na Jornada": [
        "Catalogando",
        "Precificando",
        "Preço Na Prática",
    ],
    "Mundo Minha História": [
        "Minha História E Meu Negócio",
        "Venda Se Puder",
        "Minha Narrativa",
    ],
    "Mundo Na Prática": [
        "Plano De Ação (Mvp)",
        "Teste",
        "Análise Dos Resultados",
    ],
};


const mapeamentoAtividades = {
    "Mundo Espelho": atividadesPorMundo["Mundo Espelho"],
    "Mundo Meu Lugar": atividadesPorMundo["Mundo Meu Lugar"],
    "Mundo Inspira": atividadesPorMundo["Mundo Inspira"],
    "Mundo Descoberta": atividadesPorMundo["Mundo Descoberta"],
    "Mundo Faz Negócios": atividadesPorMundo["Mundo Faz Negócios"],
    "Mundo Na Jornada": atividadesPorMundo["Mundo Na Jornada"],
    "Mundo Minha História": atividadesPorMundo["Mundo Minha História"],
    "Mundo Na Prática": atividadesPorMundo["Mundo Na Prática"],
};


const Activity = ({ questions }) => {
    const results = {};

    for (const [category, questionList] of Object.entries(questions)) {
        let result = "";
        let indicesBetween6And9 = [];

        if (questionList.some((question) => question <= 5)) {
            result = atividadesPorMundo[category].join(", ");
        } else {
            indicesBetween6And9 = questionList
                .map((question, index) => ({ value: question, index }))
                .filter(({ value }) => value >= 6 && value <= 9)
                .map(({ index }) => index);

            if (indicesBetween6And9.length > 0) {
                result = indicesBetween6And9.map(index => atividadesPorMundo[category][index]).join(", ");
            }
        }

        // Armazenado o resultado da verificação no objeto results
        results[category] = result;
    }

    // Função para coletar os dados e exibi-los no ResultComponent
    const displayResults = () => {
        const resultComponents = [];

        for (const [category, questionList] of Object.entries(questions)) {
            if (results[category]) {
                resultComponents.push(
                    <ResultComponent
                        key={category}
                        category={category}
                        activities={questionList}
                        result={results[category]}
                    />
                );
            }
        }

        return resultComponents;
    };


    //função para exibir os resultados no ResultComponent
    return (
        <div>
            {displayResults()}
        </div>
    );
};

export default Activity;
