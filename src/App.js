import React, {useState} from 'react';
import styled from 'styled-components'
import './App.css';

let NavBar = styled.div`position: absolute;
  width:100%;
  display:flex;
  align-items:stretch;
  flex-direction: row;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.161);
`;
let Menu = styled.div`
  display:flex;
  background: #ED6C38;
  width:100%;
  justify-content:space-between;
`;
let CadastroLogin = styled.div`
  user-select:none;
  background: #1FAABF;
  width:22em;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: #FFFFFF;
  text-align:center;
  line-height: 70px;
  cursor:pointer;
  min-width:190px;
  padding: 0 1em 0 1em;
  transition: color .5s;
  &:hover {
    color: black;
  }
`;
let Logo = styled.img`
  cursor:pointer;
  margin:.5em 0 .5em 70px;
`;
let Items = styled.div`
  display:flex;
`
let Item = styled.a`
  min-width:90px;
  text-decoration:none;
  user-select:none;
  font-family: Roboto;
  color:white;
  padding: 0 1em 0 1em;
  line-height: 70px;
  cursor:pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  transition: color .5s;
  &:hover {
    color: black;
  }

`
function App(props){
  console.log("aaaaaaaa");
    if(window.innerWidth > 800)
      return (<NavBar>
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
        <Menu><Logo src="logo.svg" draggable="false" alt="aaa"/>
          <Items>
            <Item href="https://#">
              sobre nós
            </Item>
            <Item href="https://#">
              agendamentos
            </Item>
            <Item href="https://#">
              contato
            </Item>
          </Items>
        </Menu>
        <CadastroLogin>Login | Cadastre-se</CadastroLogin>
      </NavBar>);
    else {
      return <div></div>
    }
}
export default App;
