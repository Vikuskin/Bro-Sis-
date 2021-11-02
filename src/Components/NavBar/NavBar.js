import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.jpeg';
import loginImg from '../../image/sign.svg';
import googleLogo from '../../image/googleLogo.jpg';
import gitHubLogo from '../../image/gitHubLogo.png';
import FBlogo from '../../image/FBlogo.jpg';
import { Context } from '../Functions/context';
import { useContext } from 'react';

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
  font-size: 18px;
  font-weight: 700px;
  cursor: pointer;
`;
const Figure = styled.figure`
  margin: 20px;
`;
const SocialNetwork = styled.div`
  display: flex;

`;

export const NavBar = () => {
  const { 
    authGoogle,
    authGit,
    authFB
  } = useContext(Context);

  const logOutSoical = () => {
    if (authGoogle.authentication) {
      authGoogle.logOut()
    } else if (authGit.authentication) {
      authGit.logOut()
    } else {
      authFB.logOut()
    }
  }
  const nameSocial = () => {
    if (authGoogle.authentication) {
      return authGoogle.authentication.displayName
    } else if (authGit.authentication) {
      return authGit.authentication.displayName
    } else {
      return authFB.authentication.displayName
    }
  }
  console.log(authGoogle.authentication);
  console.log(authGit.authentication);
  console.log(authFB.authentication);

  return (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='Логотип'/>
    </Logo>

    {authGoogle.authentication || authGit.authentication || authFB.authentication ?
      <User>
        <Figure>
          <img src={loginImg}/>
          <figcaption>{nameSocial()}</figcaption>
        </Figure>
        <LogOut title="Выйти" onClick={logOutSoical}>X</LogOut>
      </User> :
      <SocialNetwork>
      <Login onClick={authGoogle.logIn}>
        <ImgLogin src={googleLogo} alt='Войти'/>
        <LoginButton>войти</LoginButton>
      </Login>
      
      <Login onClick={authGit.logIn}>
        <ImgLogin src={gitHubLogo} alt='Войти'/>
        <LoginButton>войти</LoginButton>
      </Login>
      
      <Login onClick={authFB.logIn}>
        <ImgLogin src={FBlogo} alt='Войти'/>
        <LoginButton>войти</LoginButton>
      </Login>
      </SocialNetwork>}

  </NavBarStyled>
);
}