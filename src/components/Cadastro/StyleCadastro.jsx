import styled, { keyframes } from "styled-components";

// Estilização main

export const Main = styled.main`
    /* margin-left: 7rem; */
    width: 100%;
    height: 100vh;
    display: flex;
`

export const DivMain = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    border: solid green;
`

export const Img = styled.img `
    margin-top: 2.5rem;
    margin-left: 5rem;
    width: 16vw;
    height: 30vh;
    border: solid blue;
`

export const DivTexto = styled.div`
    width: 25vw;
    height: 40.1vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 5rem;
    margin-top: 3rem;
`

export const Input = styled.input`
    height: 6.9vh;
    border: solid #02026B;
    border-radius: 10px;
`
export const Button = styled.button`
    height: 6.4vh;
    background-color: #02026B;
    color: white;
    border-radius: 10px;
`

export const H2 = styled.h2`
    font-size: 2em;
    font-weight: 400;
`

export const P = styled.p`
    font-size: 1.2em;
    margin-bottom: 3rem;
    color: #7D7D7D;
`

// export const DivImg = styled.div`
//     width: 50%;
//     height: 100%;
// `

export const Figure = styled.figure`
    height: 100%;
    width: 50%;
    overflow: hidden;
`

export const ImgFamilia = styled.img`
    /* width: 44vw; */
    width: 100%;
    height: 100%;
`