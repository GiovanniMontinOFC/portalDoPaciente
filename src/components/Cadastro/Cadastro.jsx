import React, { useState } from "react";
import Familia from "../../assets/imglogin.png";
import LogoAzul from "../../assets/logoazul.png";
import Button from "../geral/button";
import "../../index.css";

import * as S from "./StyleCadastro.jsx";
import * as A from "../Paciente/styleContainer.jsx";


const CardCpf = ({ onNext }) => {
  const [cpf, setCpf] = useState("");

  const handleNext = () => {
    onNext(cpf);
  };

  return (
    <>
      <S.H2>Qual seu CPF/RNE?</S.H2>
      <S.P>
        Para sua segurança guardaremos suas informações através do seu CPF. Caso
        seja estrangeiro, utilizaremos o seu RNE.
      </S.P>
      <S.Input
        type="text"
        name="cpf"
        value={cpf}
        placeholder="Digite seu CPF/RNE"
        onChange={(e) => setCpf(e.target.value)}
      />
      <S.Button onClick={handleNext}>Próximo</S.Button>
    </>
  );
};

const CardDataNasc = ({ onNext }) => {
  const [dataNasc, setDataNasc] = useState("");

  const handleNext = () => {
    onNext(dataNasc);
  };

  return (
    <>
      <S.H2>Quando você nasceu?</S.H2>
      <S.Input
        type="date"
        name="dataNasc"
        value={dataNasc}
        placeholder="Insira a data"
        onChange={(e) => setDataNasc(e.target.value)}
      />
      <S.Button onClick={handleNext}>Próximo</S.Button>
    </>
  );
};

const CardNumber = ({ onNext }) => {
    const [number, setNumber] = useState("");
  
    const handleNext = () => {
      onNext(number);
    };
  
    return (
      <>
        <S.H2>Qual seu número de telefone?</S.H2>
        <S.Input
          type="number"
          name="number"
          value={number}
          placeholder="Insira o numero: "
          onChange={(e) => setNumber(e.target.value)}
        />
        <S.Button onClick={handleNext}>Próximo</S.Button>
      </>
    );
  };

  
const CardSucesso = ({ onNext }) => {
    const [sucesso, setSucesso] = useState("");  

    const handleNext = () => {
      onNext(sucesso);
    };
  
    return (
      <>
        <S.H2>Bem-Vinde à familia Saúde!</S.H2>
        <p className="sucessMessage">Sucesso - Cadastrado!</p>
        <Button path={"/meusDados"} text="Entrar" className={"buttonCad"} />

      </>
    );
  };

export default function Cadastro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, [`step${step}`]: data });
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <CardCpf onNext={handleNext} />;
      case 2:
        return <CardDataNasc onNext={handleNext} />;
      case 3:
        return <CardNumber onNext={handleNext} />;
      case 4:
        return <CardSucesso onNext={handleNext} />;
      default:
      return null;
    }
  };

  return (
    <>
      <S.Main>
        <S.DivMain>
          <figure>
            <S.Img src={LogoAzul} alt="Logo" />
          </figure>
          <S.DivTexto>
            {renderStep()}
          </S.DivTexto>
        </S.DivMain>
        <S.Figure>
          <S.ImgFamilia src={Familia} alt="Familia" />
        </S.Figure>
      </S.Main>
    </>
  );
}
