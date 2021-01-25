import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const ContainerUm = styled.div`
  height: 427px;
  background-color: #024159;
  margin: 12px 11px 2px 13px;
`
const ContainerDois = styled.div`
  height: 427px;
  background-color: #025e73;
  margin: 12px 12px 2px 11px;
  align-content: center;
`
const ContainerTres = styled.div`
  height: 427px;
  background-color: #82d0d9;
  margin: 12px 12px 2px;
`
const ContainerEducation = styled.div`
  width: 128px;
  height: 30px;
  margin: 0 73px 62px 66px;
  padding-top:34px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #ffffff;
`
const ContainerLabenu = styled.div`
  width: 262px;
  height: 50px;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #ffffff;
`
const ContainerText = styled.div`
  width: 267px;
  height: 122px;
  margin: 12px 0 0;
  font-family: Montserrat;
  font-size: 15.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #ffffff;
`
const ContainerEditor = styled.div`
  display: grid;
  justify-content:center;
`


function TelaTres() {
  return (
    <>
    <Container>
      <ContainerUm>
      <ContainerEditor>
        <ContainerEducation>

        </ContainerEducation>
        <ContainerLabenu>
          Curso de Web Full Stack na Labenu
        </ContainerLabenu>
        <ContainerText>
          6 meses - 2020 <p/>
          "A Labenu é uma startup que 
          forma Desenvolvedores Web Full Stack 
          prontos para o mercado de trabalho. 
          São mais de 1000 horas de programação que faz 
          com que seus alunos sejam profissionais 
          completos tanto no Back-End quanto no Front End."
        </ContainerText>
        </ContainerEditor>
      </ContainerUm>
      <ContainerDois>
        <ContainerEditor>
        <ContainerEducation>
          Educação
        </ContainerEducation>
        <ContainerLabenu>
          Curso de Web Full Stack na Labenu
        </ContainerLabenu>
        <ContainerText>
          6 meses - 2020 <p/>
          "A Labenu é uma startup que 
          forma Desenvolvedores Web Full Stack 
          prontos para o mercado de trabalho. 
          São mais de 1000 horas de programação que faz 
          com que seus alunos sejam profissionais 
          completos tanto no Back-End quanto no Front End."
        </ContainerText>
        </ContainerEditor>
      </ContainerDois>
      <ContainerTres>
      <ContainerEditor>
        <ContainerEducation>
        
        </ContainerEducation>
        <ContainerLabenu>
          Curso de Web Full Stack na Labenu
        </ContainerLabenu>
        <ContainerText>
          6 meses - 2020 <p/>
          "A Labenu é uma startup que 
          forma Desenvolvedores Web Full Stack 
          prontos para o mercado de trabalho. 
          São mais de 1000 horas de programação que faz 
          com que seus alunos sejam profissionais 
          completos tanto no Back-End quanto no Front End."
        </ContainerText>
        </ContainerEditor>
      </ContainerTres>
    </Container>
    </>

  );
}

export default TelaTres;


