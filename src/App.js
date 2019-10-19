import React, {useState} from 'react';
import styled from 'styled-components'
import './App.css';

const NavBar = styled.div`position: absolute;
  width:100%;
  display:flex;
  align-items:stretch;
  flex-direction: row;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.161);
`;
const Menu = styled.div`
  display:flex;
  background: #ED6C38;
  width:100%;
  justify-content:space-between;
`;
const CadastroLogin = styled.a`
  user-select:none;
  text-decoration:none;
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
  transition: color .2s;
  &:hover {
    color: black;
  }
`;
const Logo = styled.img`
  cursor:pointer;
  margin:.5em 0 .5em 70px;
`;
const Items = styled.div`
  display:flex;
`
const Item = styled.a`
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
  transition: color .2s;
  &:hover {
    color: black;
  }
`
const NavBarM = styled.div`position: absolute;
  width:100%;
  display:flex;
  align-items:stretch;
  flex-direction: row;
  background:#F6F8F9;
  height:3em;
  align-content: stretch;
  justify-content: space-between;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.161);
`;
const LogoM = styled.img`
  cursor:pointer;
  padding: 0 0 0 1em;
`;
const HamburgerButton = styled.img`
  cursor:pointer;
  height: 2em;
  width: 2em;
  padding:.5em;
`;
const HamburgerMenu = styled.ul`
  padding-top:11em;
  margin:0;
  height:100%
  width:100%;
  pointer-events: none;
  position:fixed;
  transition: all 0.3s ease-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  /* flex */
  display:flex;
  flex-direction:column;
  padding:0;

`;
const HamburgerMenuItem = styled.a`;
  pointer-events: auto;
  height:100%;
  background: #ED6C38;
  display:flex;
  cursor:pointer;
  flex-direction:column;
  justify-content:center;
  text-decoration:none;
  overflow:hidden;
    &:first-child{
      margin-top:3em
    }
    &:focus {
      background: grey;
    }
`;
const HamburgerMenuItemText = styled.span`
  color:white;
  font-family: Roboto;
  font-style: normal;
  padding-left:1em;
  font-weight: 500;
  font-size: 2em;
`;
function App(props){
let [width, setWidth] = useState(window.innerWidth);
let [open, setOpen] = useState(false);
  React.useEffect(() => {
    let handleResize = _=>{
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize)
    }

  });
  if(width > 930)
    return (<NavBar>
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
      <Menu><Logo src="logo.svg" draggable="false" alt="aaa"/>
        <Items>
          <Item href="/sobrenós">
            sobre nós
          </Item>
          <Item href="/agendamentos">
            agendamentos
          </Item>
          <Item href="/contato">
            contato
          </Item>
        </Items>
      </Menu>
      <CadastroLogin href="/login">Login | Cadastre-se</CadastroLogin>
    </NavBar>);
  else {
    return <div>
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
        <NavBarM>
          <LogoM src="logom.svg"/>
          <HamburgerButton src="menuicon.svg" onClick={e=>setOpen(!open)}/>
        </NavBarM>
        <HamburgerMenu open={open}>
          <HamburgerMenuItem href="/sobrenós">
            <HamburgerMenuItemText>sobre nós</HamburgerMenuItemText>
          </HamburgerMenuItem>
          <HamburgerMenuItem href="/agendamentos">
            <HamburgerMenuItemText>agendamentos</HamburgerMenuItemText>
          </HamburgerMenuItem>
          <HamburgerMenuItem href="/contato">
            <HamburgerMenuItemText>contato</HamburgerMenuItemText>
          </HamburgerMenuItem>
        </HamburgerMenu>
      </div>
  }
}
export default App;
