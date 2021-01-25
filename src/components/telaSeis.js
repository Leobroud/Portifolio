import React from 'react'
import styled from 'styled-components'

import LogoUm from '../assets/group-3_2.svg'
import Link from '../assets/group-10.svg'
import Zap from '../assets/group-3.svg'
import Git from '../assets/fill-1.svg'
import Twitter from '../assets/fill-1_2.svg'
import Insta from '../assets/group-8.svg'

const ContainerUm = styled.div`
  display:flex;
  justify-content: center;
  flex-wrap:wrap;
  height: 415px;
  background-color: #1b818c;
  margin: 12px 0 0;
`

const ContainerDois = styled.div`
  height: 58px;
  background-color: #024159;
  
`
const ContainerText = styled.div`
  display: flex;
  font-family: Montserrat;
  font-size: 18px;
  letter-spacing: -0.24px;
  color: #ffffff;
  padding-top:20px;
  padding-left:30px;
`

const ContainerImg = styled.img`
  width: 193px;
  height: 193px;
  margin: 16px 16px 56px 0;
  padding: 50px 103px 0 0;
  padding-left: 70px;
`
const ContainerText2 = styled.div`
  margin: 0 140px 35px 23px;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #ffffff;
`
const ContainerText3 = styled.div`
  width: 432px;
  height: 132px;
  margin: 35px 0 46px 21px;
  font-family: Montserrat;
  font-size: 18px;
  letter-spacing: -0.24px;
  color: #ffffff;

`

const ContainerLink = styled.div`
  display: inline;
  width: 40px;
  height: 37px;
  margin: 20px 15px 3px 50px;
  cursor: pointer;
`

const Container = styled.div`
padding-top: 55px;
padding-right: 20px;
`

function TelaSeis() {
  return (
    <div>
      <ContainerUm>
        <ContainerImg src={LogoUm}/>
        <Container>
          <ContainerText2>Contrate-me</ContainerText2>
          <ContainerText3>Procuro oportunidade de trabalho onde eu possa aprender, 
            me desenvolver e evoluir na minha carreia profissional.
           <p/>E-mail para contato: leo.oliveira.b@gmail.com.br 
           <br/>Celular: (21) 98062-9880
          </ContainerText3>
        </Container>
        <div>
          <ContainerLink>
            <a href="https://www.linkedin.com/in/leonardo-oliveira-barbosa/">
            <img src={Link}/>
            </a>
          </ContainerLink>
          <ContainerLink>
            <a href="https://api.whatsapp.com/send?phone=5521980629880">
            <img src={Zap}/>
            </a>
            </ContainerLink>
          <ContainerLink>
            <a href="https://github.com/Leobroud">
            <img src={Git}/>
            </a>
          </ContainerLink>
          <ContainerLink>
            <a href="https://twitter.com/Leonard76725026">
            <img src={Twitter}/>
            </a>
            </ContainerLink>
          <ContainerLink>
            <a href="https://www.instagram.com/leonardo.o.barbosa/?hl=pt-br">
            <img src={Insta}/>
            </a>
          </ContainerLink>
        </div>
      </ContainerUm>
      <ContainerDois>
        <ContainerText>© 2021 LeoBroud</ContainerText>
      </ContainerDois>
    </div>
  );
}

export default TelaSeis;