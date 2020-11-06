import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 20px 0;
  background: #000000;
  border-bottom: #558266 solid 6px;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  img {
    width: 98px;
    height: 98px;
    margin: 0 18px 0 48px;
  }

  h1 {
    color: #d6975e;
    font-family: 'Mina', sans-serif;
    font-weight: bold;
    font-size: 60px;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-itens: center;
  padding-right: 20px;

  text {
    color: #d6975e;
    margin: 0 10px 0 10px;
    font-family: 'Mina', sans-serif;
    font-size: 26px;
  }

  button {
    background-color: transparent;
    color: #d6975e;
    border: none;
    font-family: 'Mina', sans-serif;
    font-size: 26px;
  }
`;
