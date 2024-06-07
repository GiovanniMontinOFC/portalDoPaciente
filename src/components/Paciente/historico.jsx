import React, { useState } from "react";
import Navegar from "../geral/navegacao";
import Input from "../geral/input/";

import '../geral/styleInput.css';
import * as S from "./styleContainer";

const DadosHistorico = ({ historico, titulo }) => {
  return (
    <>
      <S.SectionContainer className="details">
        <h1>{titulo}</h1>
        {historico.map((item) => (
          <S.CardConsulta key={item.id} className="historico-item">
            <S.Linha className="blue">{item.especialidade}</S.Linha>
            <S.Linha className="small">
              Profissional: 
              <strong>{item.profissional}</strong>
            </S.Linha>
            <S.Linha>{item.unidade}</S.Linha>
            <S.Linha>{item.datetime.data} às {item.datetime.hora}</S.Linha>
          </S.CardConsulta>
        ))}
      </S.SectionContainer>
    </>
  );
};

const Historico = () => {
  const [selectedMonth, setSelectedMonth] = useState(""); // Estado para armazenar o mês selecionado

  const Concluidas = [
    {
      especialidade: "Ginecologia/Obstetricia",
      id: 1,
      paciente: "Gabriela da Costa Nunes",
      datetime: {
        data: "24/05/2024",
        hora: "14:48",
      },
      profissional: "João Pedro Santos da Cruz",
      unidade: "Estrada de Itapecerica - Capão Redondo"
    },
    {
      especialidade: "Cardiologia",
      id: 2,
      paciente: "Gabriela da Costa Nunes",
      datetime: {
        data: "03/06/2024",
        hora: "08:45",
      },
      profissional: "Victoria Ferreira de Almeida",
      unidade: "Barra da Tijuca - Rio de Janeiro"
    }
  ];

  const Canceladas = [
    {
      especialidade: "Ginecologia/Obstetricia",
      id: 1,
      paciente: "Gabriela da Costa Nunes",
      datetime: {
        data: "15/05/2024",
        hora: "16:22",
      },
      profissional: "Luiza de Andrade Barbosa",
      unidade: "Estrada de Itapecerica - Capão Redondo"
    },
    {
      especialidade: "Cardiologia",
      id: 2,
      paciente: "Gabriela da Costa Nunes",
      datetime: {
        data: "03/06/2024",
        hora: "08:45",
      },
      profissional: "Carlos Roberto da Rocha Silva",
      unidade: "Barra da Tijuca - Rio de Janeiro"
    }
  ];

  // Função para extrair os meses disponíveis a partir dos dados de consultas
  const getUniqueMonths = (consultas) => {
    const months = consultas.map(item => item.datetime.data.split("/")[1]);
    return [...new Set(months)]; // Retorna apenas meses únicos
  };

  const allConsultas = [...Concluidas, ...Canceladas];
  const uniqueMonths = getUniqueMonths(allConsultas);

  // Função para filtrar consultas com base no mês selecionado
  const filterConsultasByMonth = (consultas, month) => {
    return consultas.filter(item => item.datetime.data.split("/")[1] === month);
  };

  const filteredConcluidas = selectedMonth ? filterConsultasByMonth(Concluidas, selectedMonth) : Concluidas;
  const filteredCanceladas = selectedMonth ? filterConsultasByMonth(Canceladas, selectedMonth) : Canceladas;

  return (
    <>
      <section className="sectionMain">
        <Navegar/>
        <S.SmallDiv >
          <Input 
              title={"Beneficiário: "} 
              tipo={"text"} 
              nome={"nome"} 
              valor={"Gabriela"}

              desativado={true}
              classInput={"showInput"}
              classLabel={"showLabel"}
            />
          <label htmlFor="month-select" className="showLabel">Filtre:
            <select
              id="month-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">Todos os meses</option>
              {uniqueMonths.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </label>
        </S.SmallDiv>
        <div>
          <DadosHistorico historico={filteredConcluidas} titulo="Consultas Concluídas" />
        </div>
        <div>
          <DadosHistorico historico={filteredCanceladas} titulo="Consultas Canceladas" />
        </div>
      </section>
    </>
  );
};

export default Historico;
