import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.jpeg';
import loginImg from '../../image/sign.svg';


const NavBarStyled = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  color: black;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 100px;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const LoginButton = styled.button`
  background-color: transparent;
  color: black;
  font-size: 18px;
  border: none;
`;

const ImgLogin = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 18px
  font-weight: 700px;
  cursor: pointer;
`;

const Figure = styled.figure`
  margin: 20px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='Логотип'/>
    </Logo>
    {authentication ?
      <User>
        <Figure>
          <img src={loginImg} alt={authentication.displayName}/>
          <figcaption>{authentication.displayName}</figcaption>
        </Figure>
        <LogOut title="Выйти" onClick={logOut}>X</LogOut>
      </User> :
      <Login onClick={logIn}>
        <ImgLogin src={loginImg} alt='Войти'/>
        <LoginButton>войти</LoginButton>
      </Login>}
  </NavBarStyled>
);
