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
    width: 88px;
    height: 88px;
    margin-left: 30px;
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

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Navigator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #383232;
  padding: 8px 160px;

  button {
    background-color: transparent;
    color: #d6972d;
    border: none;
    font-family: 'Mina', sans-serif;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Dashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 100%;
  }
`;

export const IntroductionChart = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 480px;
  height: 580px;
  background-color: #383232;
  padding: 40px;
  background: rgba(0, 0, 0, 0.6);
  margin-left: 90px;

  strong {
    opacity: 1;
    color: #d6972d;
    margin-bottom: 20px;
    font-family: 'Mina', sans-serif;
    font-size: 22px;
  }

  p {
    opacity: 1;
    color: #d6972d;
    line-height: 32px;
    font-family: 'Mina', sans-serif;
    font-size: 16px;
  }
`;

export const OptionsBook = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 10px;

  img {
    width: 100px;
  }
`;
