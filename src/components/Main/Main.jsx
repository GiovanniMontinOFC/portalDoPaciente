import React from "react";
import * as S from "../Main/../Style.jsx";
import FotoHomem from "../../components/../assets/fotohomem.png";
import fotosgrid from "../../components/../assets/Grid.png";



function Main() {
  return (

    <S.Main>

      <S.Div1>
        <S.H1>Cuidar da saúde das pessoas para melhorar o mundo.</S.H1>
        <S.Div2>
          <S.ButtonAgOnline>Agendar consulta online</S.ButtonAgOnline>
          <S.ButtonAgPresencial> Agendar consulta presencial</S.ButtonAgPresencial>
        </S.Div2>
      </S.Div1>
    </S.Main>
  );
}

export default Main;