import styled from "styled-components/macro";

export const Item = styled.div`

  display: flex;
  border-bottom: 4px solid black;
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
font-family:"Source Sans Pro", sans-serif;
  color: black;
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.h2`
font-family:"Source Code Pro", monospace;
  color: black;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
padding-left:2em;
  max-width: 50%;
  height: auto;
`;
export const Container = styled.div`
  background: linear-gradient(-120deg, #f3f3f5, #e90b8b, #352384, #333447);
  @media (max-width: 100px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
