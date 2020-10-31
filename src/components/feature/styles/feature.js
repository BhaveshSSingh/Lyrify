import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  background: white;
  border: 2px solid #6c63ff;
  border-radius: 22px;
  color: #303030;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  } ;
`;

export const SubTitle = styled.div`
  background: white;
  border: 2px solid #6c63ff;
  border-radius: 22px;

  background: white;
  color: #303030;
  font-size: 25px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
