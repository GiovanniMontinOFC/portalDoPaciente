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
    </>
  )
}

const Proximas = () => {
  return (
    <>
      <p>Area proximas</p>
    </>
  )
}

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
        {telaAtual === "Proximas" && <Proximas />}
      </section>
    </>
  )
}

export default Consultas;
