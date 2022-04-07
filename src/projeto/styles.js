import styled from "styled-components";

export const ContainerGeral = styled.article`
    background-color: #1e111d;
    z-index: 1;
    position:fixed;
    height: 100%;
    width: 100%;
    top:0px;
    margin-top: 0;

    
`

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    background: #341933;
    width : 25%;
    height: 72%;
    padding: 80px;
    z-index: 2;
    margin: 140px 500px ;
    box-shadow: -5px -10px 9px #341933, 5px 5px 9px #341933;
    border-radius: 5%;
    align-items:center;
    justify-content: center;
    padding-top: 115px;

    @media (max-width: 768px) {
        width : 65%;
        height: 80%;
        padding: 10px;
        z-index: 2;
        margin: 50px 50px ;
      }
`
export const ButonInicial = styled.button`
    margin-right: 230px;
    width: 55px;
    border-radius: 15%;
    background-color: #DAA520;
    border: 0;

    @media (max-width: 768px) { 
        margin-right:175px;
    }
`

export const Imagem = styled.div`
    margin-right: 20px;
    margin-top: -25px;

& img {
    
    border-radius: 50%;
    width : 150px;
    height: 150px; 
    padding: 5px;
    border-style: solid ;
    border-color: #87CEEB;
}

@media (max-width: 768px) { 
    & img { 
    width : 100px;
    height: 100px; 
    }
}

`

export const Name = styled.h2`
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
    color: White;

    @media (max-width: 768px) { 
        font-size: 15px;
    }
`

export const Cidade = styled.p`
    margin-top: -8px;
    font-size: 12px;
    color: White;

    @media (max-width: 768px) { 
        font-size: 10px;
        margin-top: 1px;
    }
`
    

export const Texto = styled.p`
    margin-top: 3px;
    font-size: 18px;
    color: White;

    @media (max-width: 768px) { 
        font-size: 13px;
        margin-top: 1px;
        margin: 5px 25px
    }
`

export const Botoes = styled.button`
    &: first-of-type {
        margin-right: 5px;
        background-color: #87CEEB;
        border:0;
        border-radius: 5%;
        height: 35px;
        width: 100px;
    }

    &: last-of-type {
        border-radius: 5%;
        height: 35px;
        width: 100px;
        background-color: #341933;
        border-color: #87CEEB;
        color: #87CEEB;
    }

    @media (max-width: 768px) { 
        margin-top: 10px;
    }
`

export const ContainerSkills = styled.div`
    background-color: #1e111d;
    color: pink;
    border: 0;
    width : 395px;
    margin-top: 30px;
    box-shadow: -7px -5px 9px #1e111d, 7px 5px 9px #1e111d;
    border-radius: 5%;
    padding: 10px 28px 20px;

    & > p {
        color: White;
        font-weight: bold;

    }

    @media (max-width: 768px) { 
        width : 300px;
    }

`
export const BotoesSkills = styled.button`

    background-color: #1e111d;
    border: 0;
    box-shadow: -0.6px -0.6px 0.3px #341933 , 0.6px 1px 0.3px #341933 ;
   
   &:not(last-of-type) {
        margin-right: 20px;
        margin-top: 10px;     
   }

`