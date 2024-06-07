import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../index.css';

import * as S from "../Style";

import LogoAzul from "../../assets/logoazul.png";
import User from "../../assets/user.png";

function Navegar() {
  const location = useLocation(); // Para obter a rota atual
  const currentPath = location.pathname;

  return (
    <>
      <S.SectionMenu>
        <img src={LogoAzul} alt="logotipo saúde" />
        <nav className="nav">
          <S.Ulnav_paciente>
            <Link to="/meusDados">
              <S.MenuOptions ativo={currentPath === "/meusDados"}>Meus Dados</S.MenuOptions>
            </Link>
            <Link to="/historico">
              <S.MenuOptions ativo={currentPath === "/historico"}>Histórico</S.MenuOptions>
            </Link>
            <Link to="/consultas">
              <S.MenuOptions ativo={currentPath === "/consultas"}>Consultas</S.MenuOptions>
            </Link>
          </S.Ulnav_paciente>
        </nav>
        <S.SpanPerfil>
          <p className="preLine">
            Olá,
            Gabriela!
          </p>
          <S.Icon src={User} alt="icon perfil" />
        </S.SpanPerfil>
      </S.SectionMenu>
    </>
  )
}

export default Navegar;
