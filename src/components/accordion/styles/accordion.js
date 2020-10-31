import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #303030;
`;

export const Item = styled.div`
  color: #303030;
  margin-bottom: 10px;
  margin: auto;

  max-width: 700px;
  width: 100%;
  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Header = styled.div`
  border: 2px solid #6c63ff;
  border-radius: 22px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  color: #303030;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: white;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  img {
    filter: brightness(1) invert(0);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  } ;
`;

export const Body = styled.div`
  font-weight: 600;
  color: #303030;
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier (0.5, 0, 0.1, 1);
  font-size: 16px;
  line-height: normal;
  background: white;
  padding: 0.8em 2.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Title = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  color: black;
  background: ;
  font-weight: 500;
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: #303030;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
