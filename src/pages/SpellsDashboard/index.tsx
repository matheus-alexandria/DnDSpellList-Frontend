import React from 'react';

import ImgPotion from '../../assets/potion.png';

import { Container, Header, HeaderContent, HeaderOptions } from './styles';

const SpellsDashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={ImgPotion} alt="Potion" />

          <h1>SPELL LIST</h1>
        </HeaderContent>

        <HeaderOptions>
          <button type="button">ble ble ble</button>
          <text>|</text>
          <button type="button">bla bla bla</button>
        </HeaderOptions>
      </Header>
    </Container>
  );
};

export default SpellsDashboard;
