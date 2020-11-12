import React from 'react';

import ImgPotion from '../../assets/potion2.png';
import ImgBackground from '../../assets/shadowfell.png';
import ImgBook from '../../assets/book.png';

import {
  Container,
  Header,
  HeaderContent,
  HeaderOptions,
  Navigator,
  Dashboard,
  IntroductionChart,
  OptionsBook,
  SpellDivision,
  Spells,
  SpellsHeader,
  SpellChart,
  SpellTitle,
} from './styles';

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

      <Navigator>
        <button type="button">PI PI PI</button>
        <button type="button">PO PO PO</button>
        <button type="button">PI PI PI</button>
        <button type="button">PO PO PO</button>
      </Navigator>

      <Dashboard>
        <img src={ImgBackground} alt="Background" />

        <IntroductionChart>
          <strong>TÍTULO</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae tortor sem. Nulla facilisi. Fusce sit amet imperdiet tellus,
            at tempor diam. Quisque leo dui, faucibus eget ipsum in, sagittis
            tempus risus. Praesent eleifend nisi at nisi ornare, sed dignissim
            enim cursus. Sed ligula mi, dignissim nec magna id, euismod
            malesuada justo. Aenean non imperdiet diam, eu tincidunt purus.
            Pellentesque vel cursus ante. Duis rhoncus, urna quis consectetur
            iaculis, nulla elit condimentum nunc, pretium varius tortor dolor ut
            neque.
          </p>
        </IntroductionChart>
      </Dashboard>

      <Spells>
        <SpellDivision />

        <SpellsHeader>
          <h1>SPELLS</h1>
        </SpellsHeader>

        <SpellChart>
          <div />
          <SpellTitle>
            <strong>Nome Spell</strong>
            <p>5th Level (V, S, M)</p>
          </SpellTitle>
        </SpellChart>

        <SpellChart>
          <div />
          <SpellTitle>
            <strong>Nome Spell</strong>
            <p>5th Level (V, S, M)</p>
          </SpellTitle>
        </SpellChart>

        <SpellChart>
          <div />
          <SpellTitle>
            <strong>Nome Spell</strong>
            <p>5th Level (V, S, M)</p>
          </SpellTitle>
        </SpellChart>
      </Spells>

      <OptionsBook>
        <img src={ImgBook} alt="Um livro como imagem de um menu" />
      </OptionsBook>
    </Container>
  );
};

export default SpellsDashboard;
