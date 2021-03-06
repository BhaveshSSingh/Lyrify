import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  } ;
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: solid #6c63ff;
  border-radius: 22px;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  border-radius: 22px;
  display: flex;
  align-items: center;
  height: 70px;
  background: #6c63ff;
  color: white;
  text-transform: uppercase;
  padding: 0 32;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #303030;
    color: white;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-size: bold;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  background: white;
  border-radius: 22px;

  font-size: 19.2px;
  color: Black;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
