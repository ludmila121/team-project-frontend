import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { AuthNav } from 'components/AuthNav/AuthNav'




export const HeaderContainer = styled.div`
width: 100%;
height: 48px;
position: sticky;
top: 0;
z-index: 50;
padding: 2px 0;
// background-color: ${theme.colors.bgColor};

@media screen and (max-width: 1199px) {
    width: 100%;
    // max-width: 608px;
    height: 44px;
}

@media screen and (max-width: 767px) {
    width: 100%;
    max-width: 480px;
    height: 28px;
}
`

export const HeaderWrapper = styled.div`
margin:auto;
width: 100%;
max-width: 1280px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export const HeaderMenu = styled.div`
display:flex;

@media screen and (min-width: ${theme.breakpoints.desktop}){
flex-direction: row-reverse;
width: 959px;
height: 28px;
justify-content: space-between;
align-items: baseline;
}
`




export const Auth = styled(AuthNav)`
    display: flex;
`
    

export const AuthContainer = styled.div`
@media screen and (min-width: 768px){
    display: visible;
}

@media screen and (max-width: 767px){
    margin-bottom: 40px;
    display: none;
}
`

export const UserNavContainer = styled.div`
@media screen and (min-width: 768px){
    display: visible;
}

@media screen and (max-width: 767px){
    margin-bottom: 40px;
    display: none;
}
`

export const IconOpenMenu = styled.div`
display: none;

@media screen and (max-width: 1279px){
    display: flex;
    padding-top: 5px;
    transition: 0.4s all ease-in;
}
`

export const MenuButton = styled.span`
svg {
    stroke: ${theme.colors.yellow};
  }

  &:hover,
  &:focus {
    stroke: ${theme.colors.blue};
  }
`



export const CrossButton = styled.span`

svg {
    stroke: ${theme.colors.yellow};}

  &:hover,
  &:focus {
    stroke: ${theme.colors.blue};
  }
`




