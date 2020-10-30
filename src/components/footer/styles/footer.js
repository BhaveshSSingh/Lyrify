import styled from "styled-components/macro";

export const Container = styled.div`
  background: black;
  display: flex;
  flex-grow: 3;
  padding: 70px 56px;
  margin: auto;
  max-width: 100%;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  :hover {
     {
      color: #6c63ff;
    }
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 40px;
  :hover{
      {
        color:#6C63FF
      }
`;

export const SubTitle = styled.p`
  color: #757575;
`;

export const Text = styled.p`
  padding-top: 1em;
  text-align: end;
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  :hover {
     {
      color: #6c63ff;
    }
  }
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
