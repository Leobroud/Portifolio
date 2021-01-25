import React from 'react'
import styled from 'styled-components'

const ContainerUm = styled.div`
  height: 73px;
  background-color: #ffffff;
  text-align: center;
  `
const ContainerDois = styled.div`
  height: 358px;
  background-color: #011726;
`
const ContainerTres = styled.div`
  height: 358px;
  background-color: #1b818c;
`
const ContainerQuatro = styled.div`
  height: 358px;
  background-color: #025e73;
`
const ContainerCinco = styled.div`
  height: 75px;
  background-color: #024159;
  text-align: center;
`
const ContainerText = styled.div`
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.15px;
  color: #00436c;
  padding-top: 20px;
`
const ContainerTextEnd = styled.button`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #ffffff;
  padding-top: 23px;
  outline:none;
  cursor: pointer;
  background: none;
  border: none;
`

function TelaQuatro() {
  return (
    <div>
      <ContainerUm>
        <ContainerText> Meus projetos</ContainerText>
      </ContainerUm>
      <ContainerDois></ContainerDois>
      <ContainerTres></ContainerTres>
      <ContainerQuatro></ContainerQuatro>
      <ContainerCinco>
        <ContainerTextEnd>mais projetos</ContainerTextEnd>
      </ContainerCinco>
    </div>
  );
}

export default TelaQuatro;