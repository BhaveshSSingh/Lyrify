import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 4px solid #303030;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  text-align: center;
  background: #6c63ff;
  border: 2px solid #6c63ff;
  border-radius: 22px;
  font-weight: normal;
  color: #303030;
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.h2`
  color: #303030;

  border-radius: 22px;
  font-family: "Source Code Pro", monospace;
  background: ;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
  padding-left: 5em;
  max-width: 50%;
  height: auto;
  @media (max-width: 600px) {
    padding: 1em;
  }
`;
export const Container = styled.div`
  @media (max-width: 100px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
