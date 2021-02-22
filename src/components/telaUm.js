import React from 'react'
import styled from 'styled-components'
import leo from '../assets/leo.jpg'

import Curriculo from '../assets/curriculoTi.docx'
import Link from '../assets/group-10.svg'
import Zap from '../assets/group-3.svg'
import Git from '../assets/fill-1.svg'
import Twitter from '../assets/fill-1_2.svg'
import Insta from '../assets/group-8.svg'

const Container = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1;
`

const ContainerUm = styled.div`
  height: 721px;
  background-color: #011726;
  margin: 0 12px 6px 0;
`

const ContainerDois = styled.div`
  height: 721px;
  background-image: url(${leo});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(1, 23, 38, 0.47);
  filter: brightness(90%);
`
const ContainerName = styled.div`
  font-style: bold;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.28px;
  color: #ffffff;
  padding-left:32px ;
  padding-top:19px ;
`
const ContainerButton = styled.button`
  margin: 32px 12px 0 1px;
  padding: 5px 30px 7px 31px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #82d0d9;
  margin-left:135px;
  cursor:pointer;
`
const ContainerMe = styled.div`
  font-style: bold;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -0.29px;
  color: #ffffff;
  padding-left:135px;
  padding-top:80px;
`
const ContainerDev = styled.div`
  font-style: bold;
  font-size: 24px;
  letter-spacing: -0.32px;
  color: #ffffff;
  padding-left:135px; 
  padding-top:6px;
`
const ContainerTitle = styled.div`
  font-style:Regular;
  font-size: 16px;
  letter-spacing: -0.22px;
  color: #ffffff;
  padding-left:135px; 
  padding-top:12px;
`
const ContainerText = styled.div`
  margin: 48px 0 26px 1px;
  font-style: Regular;
  font-size: 15px;
  font-style: normal;
  letter-spacing: -0.16px;
  color: #ffffff;
  padding-left:135px;
`
const ContainerTec = styled.div`
  display: flex;
  margin: 26px 16px 20px 5px;
  font-style: Regular;
  font-size: 15px;
  letter-spacing: -0.28px;
  color: #ffffff;
  padding-left:95px;
`
const ContainerSpace = styled.div`
  width: 3px;
  height: 17px;
  background-color: #ffffff;
  margin-right:5px;
  margin-left:35px;
`
const ContainerTextButton = styled.text`
  font-style: Regular;
  letter-spacing: -0.28px;
  color: #011726;
`
const ContainerLink = styled.div`
  display:flex;
  justify-content:space-evenly;
  width: 30px;
  height: 27px;
  margin: 70px 15px 3px 600px;
  cursor: pointer;
`
const LinkContainer = styled.a`
  text-decoration: none;
`

function TelaUm() {
  return (
    <>
    <Container>
      <ContainerUm>
        <ContainerName>
          Leo
        </ContainerName>
        <ContainerMe>
          Eu sou<br/>
          Leonardo Oliveira
        </ContainerMe>
        <ContainerDev>
          Desenvolvedor Web Full Stack
        </ContainerDev>
        <ContainerTitle>
          Apaixonado por tecnologia e programação.
        </ContainerTitle>
        <ContainerText>
        Tenho 29 anos, formado em Análise e desenvolvimento de sistemas<br/> 
        conheci a área de desenvolvimento web<br/>
        graças a uma indicação de um bootcamp Full-Stack<br/> que fiz
        pela Labenu, focado em React, JavaScript e NodeJS.<br/> 
        Conclui e fui em busca de novos conhecimentos sobre a área.<br/>
        Hoje estudo tecnologias voltada ao desenvolvimento Web,<br/>
        na parte de Front-end.
        </ContainerText>
        <ContainerTec>
        <ContainerSpace/>NodeJS
        <ContainerSpace/>MySQL
        <ContainerSpace/>HTML
        <ContainerSpace/>CSS
        <ContainerSpace/>JavaScript 
        </ContainerTec>
        <ContainerButton>
        <LinkContainer href={Curriculo}
          download = "Curriculo">
          <ContainerTextButton>
            CV em PDF
          </ContainerTextButton>
        </LinkContainer>
        </ContainerButton>
      </ContainerUm>
      <ContainerDois>
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
      </ContainerDois>
    </Container>
    </>

  );
}

export default TelaUm;