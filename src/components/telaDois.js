import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 407px;
  margin: 12px 0;
  background-color: #1b818c;
`
const ContainerText = styled.div`
  font-family: Montserrat;
  font-size: 25px;
  letter-spacing: -0.15px;
  text-align: center;
  color: #ffffff;
  padding-top: 42px;
  
`

const ContainerFront = styled.div`
  width: 286px;
  height: 67px;
  margin: 35px 122px 20px 0;
  font-family: Montserrat;
  font-size: 55px;
  font-weight: bold;
  letter-spacing: -0.32px;
  color: #ffffff;
`

const ContainerBack = styled.div`
  width: 274px;
  height: 67px;
  margin: 35px 0 20px 122px;
  font-family: Montserrat;
  font-size: 55px;
  font-weight: bold;
  letter-spacing: -0.32px;
  color: #ffffff;
`
const ContainerFrontBack = styled.div`
  display: flex;
  justify-content:center;
`
const ContainerTextFront = styled.div`
  width: 247px;
  height: 133px;
  margin: 20px 161px 0 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #ffffff;
`
const ContainerTextBack = styled.div`
  width: 247px;
  height: 133px;
  margin: 20px 161px 0 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #ffffff;
`

function TelaDois() {
  return (
    <>
      <Container>
        <ContainerText>Meus Conhecimentos</ContainerText>
        <ContainerFrontBack>
          <ContainerFront>
            Front-end
            <ContainerTextFront>
              Desenvolvimento de aplicações
              <br/>web utilizando HTML, CSS e
              JavaScript. <p/>
              Criação de sites responsivos<br/>
              seguindo princípio de
              Mobile First.
            </ContainerTextFront>
          </ContainerFront>
          <ContainerBack>
            Back-end
            <ContainerTextBack>
              Aplicações utilizando NodeJS,
              Typescript e MySQL.<p/>
              Criação de API´s para<br/>
              comunicação com front-end<br/>
              seguindo princípio de Clean Code.
            </ContainerTextBack>
          </ContainerBack>
        </ContainerFrontBack>
      </Container>
    </>
  );
}

export default TelaDois;