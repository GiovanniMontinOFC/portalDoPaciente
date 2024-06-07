import styled from "styled-components";

// Area Meus Dados
const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 18px;
    width: 65vw;
    height: 55vh;
`

const LargeDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    width: 60vw;
    height: 25vh;
`

const SmallDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;

    margin-top: 10px;
    width: 50vw;
    height: 15vh;
`
const ButtonGlobal = styled.button` 
    height: 5vh;
    width: 13vw;
    margin: 10px 60px 10px 0px;
    border-radius: 10px;
    background-color: ${(props) => (props.backColor ? "#D9D9D9" : "#070c71")};
    color: ${(props) => (props.backColor ? "#070c71" : "#FFFFFF")};
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    cursor: pointer;
` 

    //Area Edicao de Dados    
const SavedMessage = styled.div`
    width: 100vw;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    background-color: #D8F2D7;
`

// Area Consultas 
    // Agendamento
const Options = styled.option`
    height: 6vh;
    padding: 5px;

    font-size: 14px;
    border: 2px solid #696969;
`

const Linha = styled.p`
   margin: 5px 10px;
   font-size: 15px;
   white-space: pre-line;
   width: 18vw;
`

const CardConsulta = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    border: 2px solid #070c71;
    border-radius: 20px;
    margin-top: 10px;
    padding: 10px;
    width: 35vw;
    height: 15vh;
`


//

const LabelForm = styled.label`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  width: 20vw;
  height: 15vh;
  font-size: 15px;
  justify-content: center;
  align-items: center;

  padding: 1px;
  /* border: 2px solid blue; */
`;

const CheckboxForm = styled.input`
  width: 30px;
  &:hover {
    scale: 1.1;
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 0 auto;
  font-size: 15px;
`;


export {LargeDiv, Linha, LabelForm, CheckboxForm, Span, CardConsulta, SmallDiv, SectionContainer, ButtonGlobal, SavedMessage, Options};