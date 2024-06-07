import React, { useState } from "react";
import Input from "../geral/input/";
import Navegar from "../geral/navegacao";
import { useNavigate } from "react-router-dom";


import '../geral/styleInput.css';
import * as S from "./styleContainer";

const ExibirInputs = ({ dadosUser, isDisabled, handleChange, classInput }) => {
  return (
    <S.SectionContainer>
      <div>
        <h1 className="titleLabel"> Meus Dados</h1>
        <S.LargeDiv >
          <Input 
            title={"Nome Completo: "} 
            tipo={"text"} 
            nome={"nome"} 
            valor={dadosUser.nome}

            desativado={isDisabled}
            onChange={handleChange}
            classInput={classInput}
            classLabel={"showLabel"}
          />

          <Input 
            title={"CPF: "}
            tipo={"number"}
            nome={"cpf"} 
            valor={dadosUser.cpf}

            desativado={isDisabled}
            onChange={handleChange}
            classInput={classInput}
            classLabel={"showLabel"}
          />

          <Input 
            title={"Gênero: "} 
            tipo={"text"} 
            nome={"genero"} 
            valor={dadosUser.genero}

            desativado={isDisabled}
            onChange={handleChange}
            classInput={classInput}
            classLabel={"showLabel"}
          />  

          <Input 
            title={"Data de Nascimento: "}
            tipo={"date"}
            nome={"dataNasc"} 
            valor={dadosUser.dataNasc}

            desativado={isDisabled}
            onChange={handleChange}
            classInput={classInput}
            classLabel={"showLabel"}
          />
        </S.LargeDiv>
      </div>
      <div>
        <h2 className="titleLabel">Endereço</h2>
        <S.SmallDiv>
          <Input 
            title={"CEP"}
            tipo={"number"}
            nome={"cep"} 
            valor={dadosUser.endereco.cep}

            desativado={isDisabled}
            onChange={handleChange}
            classInput={classInput}
            classLabel={"showLabel"}
          />
          <Input 
            title={"Logradouro (ex: Rua, Avenida, ...)"}
            tipo={"text"}
            nome={"logradouro"} 
            valor={dadosUser.endereco.logradouro}

            desativado={isDisabled}
            onChange={handleChange}
            classInput={classInput}
            classLabel={"showLabel"}
          />
          <Input 
            title={"Nº"}
            tipo={"number"}
            nome={"endNumero"} 
            valor={dadosUser.endereco.nmr}

            desativado={isDisabled}
            onChange={handleChange}
            classInput={classInput}
            classLabel={"showSmallLabel"}
          />
        </S.SmallDiv>
      </div>
    </S.SectionContainer>
  )
}

function MeusDados() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [classInput, setClassInput] = useState("hideInput");

  const [editOrSave, setEditOrSave] = useState("Alterar Dados");
  const [leaveOrRefresh, setLeaveOrRefresh] = useState("Sair da Conta");
  const [showSavedMessage, setShowSavedMessage] = useState(false); 

  const navigate = useNavigate(); 

  const clicou = () => {
    if (isDisabled){
      setEditOrSave("Salvar");
      setLeaveOrRefresh("Cancelar")
      setClassInput("showInput")
    } else {
      setEditOrSave("Alterar Dados")
      setLeaveOrRefresh("Sair da Conta")
      setClassInput("hideInput")

       // Mostrar a mensagem quando salvar
      setShowSavedMessage(true);
      // Definir um tempo para esconder a mensagem após um tempo
      setTimeout(() => {
        setShowSavedMessage(false);
      }, 2000);
    }
    setIsDisabled(!isDisabled);

  };

  const sair = () => {
    if (leaveOrRefresh == "Sair da Conta"){
      navigate('/'); 
    } else {
      window.location.reload();
    };
  };

  const [dadosUser, setDadosUser] = useState({
    nome: "Gabriela da Costa Nunes",
    cpf: 19358872720,
    dataNasc: "1998-01-05",
    genero: "Feminino",
    endereco: {
      cep: "01311000",
      logradouro: "Avenida Paulista",
      nmr: "185",
      complemento: ""
    }
  });

  const handleChange = (e) => {
    // Extrai o nome e o valor do input que foi alterado
    const { name, value } = e.target;
    setDadosUser(prevState => ({
      ...prevState, // Copia todos os valores anteriores de dadosUser
      // Atualiza o valor do campo que foi alterado
      [name]: value 

    }));
  };

  return (
    <>
      <Navegar/>
      <section className="sectionMain"> 
        {/* Mostrar a mensagem se showSavedMessage for true */}
        {showSavedMessage && <S.SavedMessage><p>Sucesso - Seus dados foram alterados!</p></S.SavedMessage>} 
        <ExibirInputs dadosUser={dadosUser} isDisabled={isDisabled} handleChange={handleChange}           classInput={classInput}
/>
        <div className="div">
        <S.ButtonGlobal backColor onClick={()=>{ sair()  }}>{leaveOrRefresh}</S.ButtonGlobal>
        <S.ButtonGlobal onClick={()=>{clicou()}}>{editOrSave}</S.ButtonGlobal>
        </div>
      </section>
    </>
  )
}

export default MeusDados;
