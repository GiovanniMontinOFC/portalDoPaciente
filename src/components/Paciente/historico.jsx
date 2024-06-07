import React, { useState } from "react";
import Navegar from "../geral/navegacao";

import '../geral/styleInput.css';
import * as S from "./styleContainer";

const DadosHistorico = ({ historico, titulo }) => {
  return (
    <>
      <div>
        <h3>{titulo}</h3>
        {historico.map((item) => (
          <div key={item.id} className="historico-item">
            <p><strong>Especialidade:</strong> {item.especialidade}</p>
            <p><strong>Paciente:</strong> {item.paciente}</p>
            <p><strong>Data:</strong> {item.datetime.data}</p>
            <p><strong>Hora:</strong> {item.datetime.hora}</p>
            <p><strong>Profissional:</strong> {item.profissional}</p>
            <p><strong>Unidade:</strong> {item.unidade}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const Historico = () => {
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

  return (
    <>
     
      <Navegar/>
      <p>Olá Mundo - Historico</p>
      <h2>Histórico</h2>

      <DadosHistorico historico={Concluidas} titulo="Consultas Concluídas" />
      <DadosHistorico historico={Canceladas} titulo="Consultas Canceladas" />
    </>
  );
};

export default Historico;
