import React from 'react'
import styled from 'styled-components'
import Ipad from '../assets/ipad.png'
import Mac from '../assets/macbook.png'
import Imac from '../assets/imac.png'

const ContainerUm = styled.div`
  height: 73px;
  background-color: #ffffff;
  text-align: center;
  `
const ContainerDois = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 358px;
  background-color: #011726;
`
const ContainerTres = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 358px;
  background-color: #1b818c;
`
const ContainerQuatro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding-top: 23px;
  cursor: pointer;
  background: none;
  border: none;
`
const ContainerMac = styled.img`
  width: 312px;
  height: 216px;
  margin: 24px 65px 28px 0;
  object-fit: contain;
`
const ContainerIpad = styled.img`
  width: 311px;
  height: 215px;
  margin: 24px 52px 29px 0;
  object-fit: contain;
`
const ContainerImac = styled.img`
  width: 321px;
  height: 222px;
  margin: 46px 47px 0 0;
  object-fit: contain;
  `

  const ContainerTitle = styled.div`
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #ffffff;
  `
  const FrontOrBack = styled.div`
  font-family: Montserrat;
  font-size: 21px;
  letter-spacing: -0.28px;
  color: #ffffff;
  `
  const ContainerAbout = styled.div`
  width: 368px;
  height: 122px;
  font-family: Montserrat;
  font-size: 15px;
  letter-spacing: -0.16px;
  color: #ffffff;
  padding-top:30px;
  `
  const ContainerButton = styled.button`
  margin: 16px 227px 0 5px;
  padding: 5px 23px 7px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #82d0d9;
  cursor: pointer;
  `
  const Container = styled.div`
  display:grid;
  `

  const ContainerLink = styled.a`
  text-decoration: none;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #ffffff;
  `
  const ContainerLinkAll = styled.a`
  text-decoration: none;
  color: #000000;
  `

function TelaQuatro() {
  return (
    <>
      <ContainerUm>
        <ContainerText> Meus projetos</ContainerText>
      </ContainerUm>
      <ContainerDois>
          <ContainerMac src={Mac}/>
        <Container>
          <ContainerTitle>4Used</ContainerTitle>
          <FrontOrBack>Front-end</FrontOrBack>
          <ContainerAbout>
          A 4used é uma startup voltada para compra e venda de produtos usados.
          Aqui vamos publicar roupas, artigos de decoração, calçados, 
          eletronicos e móveis. Com um espírito moderno e jovial 
          conectando empresas e pessoas que querem vender com as 
          pessoas interessadas em comprar mercadorias de 
          qualidade com um preço mais em conta..
          </ContainerAbout>
          <ContainerButton>
            <ContainerLinkAll href="https://github.com/Leobroud/4Used">
              Ver no GitHub
            </ContainerLinkAll>
          </ContainerButton>
        </Container>
      </ContainerDois>
      <ContainerTres>
        <ContainerIpad src={Ipad}/>
        <Container>
          <ContainerTitle>Labe-commerce</ContainerTitle>
          <FrontOrBack>Front-end</FrontOrBack>
          <ContainerAbout>
          A Labe-commerce é um site focado na venda 
          de itens espacias tais como:<br/>
          - Satélites antigos;<br/>
          - Roupas espaciais;<br/>
          - Meteoritos / aerolitos como pedras preciosas;<br/>
          - Brinquedos e produtos infantis temáticos;<br/>
          - Naves / Foguetes / Ônibus espaciais; <br/>
          </ContainerAbout>
          <ContainerButton>
            <ContainerLinkAll href="https://github.com/Leobroud/Labe-commerce">
              Ver no GitHub
            </ContainerLinkAll>
          </ContainerButton>
          </Container>
      </ContainerTres>
      <ContainerQuatro>
        <ContainerImac src={Imac}/>
        <Container>
          <ContainerTitle>Labe-Food</ContainerTitle>
          <FrontOrBack>Front-end</FrontOrBack>
          <ContainerAbout>
            O projeto LabeFood foi baseado num clone do uber-eats
            onde tivemos a experiência de trabalhar em grupo.
            Implementamos as funcionalidades mais comuns em um 
            desenvolvimento Front-End: formulários, auntenticação,
            routers, estilizações e testes automatizados.
          </ContainerAbout>
          <ContainerButton>
            <ContainerLinkAll href="https://github.com/Leobroud/Labe-Food">
              Ver no GitHub
            </ContainerLinkAll>
          </ContainerButton>
        </Container>
      </ContainerQuatro>
      <ContainerCinco>
        <ContainerTextEnd>
         <ContainerLink href="https://github.com/Leobroud" title="Acesse meu GitHub">
           Mais projetos
          </ContainerLink>
        </ContainerTextEnd>
      </ContainerCinco>
    </>
  );
}

export default TelaQuatro;