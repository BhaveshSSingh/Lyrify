import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/header/${src}.png` : `../images/header/head.png`})
    top left/ cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 100px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  } ;
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #6c63ff;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 22px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background: #303030;
    color: white;
  }
`;
