import React, { useState } from "react";
import Input from "../geral/input/";
import Navegar from "../geral/navegacao";
import { useNavigate } from "react-router-dom";

import '../geral/styleInput.css';
import '../../index.css';
import * as S from "./styleContainer";
import * as A from "../Style";

const SubNav = ({ clicou, telaAtual }) => {
  return (
    <>
      <nav className="nav">
        <A.Ulnav_paciente start={"start"} off={"off"}>
          <A.MenuOptions ativo={telaAtual === "Agenda"} onClick={() => { clicou("Agenda") }}>Agendar Consulta</A.MenuOptions>
          <A.MenuOptions ativo={telaAtual === "Proximas"} onClick={() => { clicou("Proximas") }}>Próximas Consultas</A.MenuOptions>
        </A.Ulnav_paciente>
      </nav>
    </>
  )
}

const Agendar = () => {

  const [especialidade, setEspecialidade] = useState("");
  const [unidade, setUnidade] = useState("");
  const [resultados, setResultados] = useState([]);

  const handlePesquisa = () => {
    // Simulação de busca de médicos com base na especialidade e unidade selecionadas
    const medicosEncontrados = [
      { nome: "Dr. João Silva", especialidade: "Ginecologia/Obstreticia", unidade: "Paulista"},
      { nome: "Dr. Maria Santos", especialidade: "Ginecologia/Obstreticia", unidade: "Paulista" },
      { nome: "Dr. Carlos Oliveira", especialidade: "Ginecologia/Obstreticia", unidade: "Barra da Tijuca" }
    ];

    // Filtrar os médicos com base na especialidade e unidade selecionadas
    const medicosFiltrados = medicosEncontrados.filter(medico => {
      return (especialidade === "" || medico.especialidade === especialidade) &&
             (unidade === "" || medico.unidade === unidade);
    });

    // Atualizar os resultados com os médicos encontrados
    setResultados(medicosFiltrados);
  }

  return (
    <>
      <S.SmallDiv>
        <label htmlFor="esp" className="showLabel">Especialidade</label>
        <select id="esp" name="esp" >
          <option className="option" value="gineco">Ginecologia/Obstreticia</option>
          <option className="option" value="geral">Clinico Geral</option>
          <option className="option" value="urologia">Urologia</option>
          <option className="option" value="derma">Dermatologia</option>
          <option className="option" value="neuro">Neurologia</option>
        </select>
        <S.LabelForm>
        <S.Span>
          <S.CheckboxForm
            name="opcao"
            type="radio"
            value="online"
          />{" "}
          Online
        </S.Span>
        <S.Span>
          <S.CheckboxForm
            name="opcao"
            type="radio"
            value="presencial"
          />{" "}
          Presencial
        </S.Span>
      </S.LabelForm>

      </S.SmallDiv>
      <S.SmallDiv>
        <label htmlFor="uf" className="showLabel">
          UF
          <select id="uf" name="uf" >
            <S.Options value="sp">SP</S.Options>
            <S.Options className="option" value="rj">RJ</S.Options>
          </select>
        </label>
        <label htmlFor="cidade" className="showLabel">
          Cidade
          <select id="cidade" name="cidade" >
            <option value="sp">São Paulo</option>
            <option value="sp_abc">Santo André</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="rj_regiao">Paraty</option>
          </select>
        </label>
        <label htmlFor="unidade" className="showLabel">
          Unidade
          <select id="unidade" name="unidade" >
            <option value="sp">Paulista</option>
            <option value="sp_abc">Santo André - Centro</option>
            <option value="rj">Barra da Tijuca</option>
            <option value="rj_regiao">Paraty - Centro</option>
          </select>
        </label>
      </S.SmallDiv>
      <S.ButtonGlobal onClick={()=>{handlePesquisa()}}>Pesquisar Datas</S.ButtonGlobal>
      {resultados.length > 0 && (
        <div>
          <h3>Datas Disponiveis para Agendar:</h3>
          <h4> 20/06/2024 </h4>
          <ul>
            {resultados.map((medico, index) => (
              <S.CardConsulta small>
               <S.Linha key={index}>{medico.nome}</S.Linha>
               <S.Linha key={index}><strong>{medico.especialidade}</strong></S.Linha>
               <S.Linha key={index}>{medico.unidade}</S.Linha>
               <button className="buttonCircle"> {">"} </button>

              </S.CardConsulta>
            ))}
          </ul>
        </div>)}
    </>
  )
}

const DadosProximas = ({ proximas, titulo }) => {
  return (
    <>
      <S.SectionContainer className="details">
        <h1>{titulo}</h1>
        {proximas.map((item) => (
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

const ProximasConsultas = () => {
  const Proximas = [
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
    },
    {
      especialidade: "Clinica Geral",
      id: 2,
      paciente: "Gabriela da Costa Nunes",
      datetime: {
        data: "29/06/2024",
        hora: "10:00",
      },
      profissional: "Augustos de Souza",
      unidade: "Barra da Tijuca - Rio de Janeiro"
    }
  ];

  return (
    <>
     <section className="sectionMain">
        <div>
          
           <DadosProximas proximas={Proximas} titulo="Próximas consultas agendadas" />
        </div>
      
      </section>
    </>
  );
};

function Consultas() {
  const [telaAtual, setTelaAtual] = useState("Agenda");

  const clicou = (tela) => {
    setTelaAtual(tela);
  };

  return (
    <>
      <Navegar />
      <section className="sectionMain">
        <SubNav clicou={clicou} telaAtual={telaAtual} />
        {telaAtual === "Agenda" && <Agendar />}
        {telaAtual === "Proximas" && <ProximasConsultas />}
      </section>
    </>
  )
}

export default Consultas;