import React from 'react'
import styled from 'styled-components'

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
  background-color: rgba(1, 23, 38, 0.47);
  
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
        Lorem ipsum dolor sit amet,consectetur adipiscing elit,<br/>
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua.<br/>
        Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint<br/>
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br/>
        ollit anim id est laborum.
        </ContainerText>
        <ContainerTec>
        <ContainerSpace/>NodeJS
        <ContainerSpace/>MySQL
        <ContainerSpace/>HTML
        <ContainerSpace/>CSS
        <ContainerSpace/>JavaScript 
        </ContainerTec>
        <ContainerButton>
          <ContainerTextButton>
            CV em PDF
          </ContainerTextButton>
        </ContainerButton>
      </ContainerUm>
      <ContainerDois>

      </ContainerDois>
    </Container>
    </>

  );
}

export default TelaUm;