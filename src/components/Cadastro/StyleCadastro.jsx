import styled, { keyframes } from "styled-components";

// Estilização main

export const Main = styled.main`
    /* margin-left: 7rem; */
    width: 100%;
    height: 100vh;
    display: flex;
     @media(min-width:201px) and (max-width: 500px){
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`

export const DivMain = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    border: solid green;
      @media(min-width:201px) and (max-width: 500px){
        width: 100%;
        
    }
`

export const Img = styled.img `
    margin-top: 2.5rem;
    margin-left: 5rem;
    width: 16vw;
    height: 30vh;
    border: solid blue;
     @media(min-width:201px) and (max-width: 500px){
        width: 100%;
        height: 93.2%;
    }
`

export const DivTexto = styled.div`
    width: 25vw;
    height: 40.1vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 5rem;
    margin-top: 3rem;
     @media(min-width:201px) and (max-width: 500px){
       
        width: 55%;
    }
`

export const Input = styled.input`
    height: 6.9vh;
    border: solid #02026B;
    border-radius: 10px;
      @media(min-width:201px) and (max-width: 500px){
        width: 100%;
        height: 11%;

    }
`
export const Button = styled.button`
    height: 6.4vh;
    background-color: #02026B;
    color: white;
    border-radius: 10px;
     @media(min-width:201px) and (max-width: 500px){
        width: 100%;
        height: 11%;
    }
`


export const H2 = styled.h2`
    font-size: 2em;
    font-weight: 400;
       @media(min-width:201px) and (max-width: 500px){
        border: solid green;
        width: 100%;
        height: 8%;
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
    }
`

export const P = styled.p`
    font-size: 1.2em;
    margin-bottom: 3rem;
    color: #7D7D7D;
      @media(min-width:201px) and (max-width: 500px){
        border: solid green;
        width: 100%;
        height: 23%;
        font-size: 0.8em;
        display: flex;
        margin-bottom: 5em;
        justify-content: center;
        align-items: center;
    }
`

// export const DivImg = styled.div`
//     width: 50%;
//     height: 100%;
// `

export const Figure = styled.figure`
    height: 100%;
    width: 50%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
     @media(min-width:201px) and (max-width: 500px){
        
        width: 50%;
        height: 20%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ImgFamilia = styled.img`
    /* width: 44vw; */
    width: 100%;
    height: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
       @media(min-width:201px) and (max-width: 500px){
        border: solid blue;
        border-radius: 100px;
        width: 50%;
        margin-right: 30px;
    }
`