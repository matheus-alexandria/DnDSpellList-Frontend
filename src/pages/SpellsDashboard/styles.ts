import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 0 10px 0;
  background: #000000;
  border-bottom: #558266 solid 6px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 98px;
    height: 98px;
    margin-left: 30px;
  }

  h1 {
    color: #d6975e;
    font-family: 'Mina', sans-serif;
    font-weight: bold;
    font-size: 70px;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;

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
