import styled, { keyframes } from "styled-components";
// Estilização main
export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;

    @media (max-width: 500px) {
        flex-direction: column;
        height: auto;
    }
`

export const DivMain = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`

export const Img = styled.img`
    margin-top: 2.5rem;
    margin-left: 5rem;
    width: 16vw;
    height: 30vh;

    @media (max-width: 500px) {
        width: 50%;
        margin-top: 0;
        margin-left: 0;
        height: auto;
    }
`

export const DivTexto = styled.div`
    width: 25vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 5rem;
    margin-top: 3rem;

    @media (max-width: 500px) {
        width: 80%;
        margin-left: 0;
        margin-top: 1rem;
        height: auto;
        justify-content: center;
        align-items: center;
    }
`

export const Input = styled.input`
    height: 7vh;
    border: solid #02026B;
    padding: 10px;
    border-radius: 10px;

    @media (max-width: 500px) {
        width: 100%;
        height: auto;
    }
`

export const Button = styled.button`
    height: 7vh;
    background-color: #02026B;
    color: white;
    border-radius: 10px;

    @media (max-width: 500px) {
        width: 100%;
        height: auto;
    }
`

export const H2 = styled.h2`
    font-size: 2em;
    font-weight: 400;

    @media (max-width: 500px) {
        font-size: 1.5em;
        text-align: center;
    }
`

export const P = styled.p`
    font-size: 1.2em;
    margin-bottom: 3rem;
    color: #7D7D7D;

    @media (max-width: 500px) {
        font-size: 1em;
        margin-bottom: 1.5rem;
        text-align: center;
    }
`

export const Figure = styled.figure`
    height: 100%;
    width: 50%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 500px) {
        display: none;
    }
`

export const ImgFamilia = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
`