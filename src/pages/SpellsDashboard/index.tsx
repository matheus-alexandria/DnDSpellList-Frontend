import React from 'react';

import ImgPotion from '../../assets/potion.png';

import { Container, Header, HeaderContent } from './styles';

const SpellsDashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={ImgPotion} alt="Potion" />

          <h1>SPELL LIST</h1>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default SpellsDashboard;
