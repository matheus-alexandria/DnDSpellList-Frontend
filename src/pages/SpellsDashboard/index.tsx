import React, { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import ImgPotion from '../../assets/potion2.png';
import ImgBackground from '../../assets/shadowfell.png';
import ImgBook from '../../assets/book.png';

import api from '../../services/api';

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

interface Spell {
  id: string;
  name: string;
  level: number;
  type: string;
  castTime: string;
  range: string;
  components: string;
  duration: string;
  class: string;
  description: string;
  extra?: string;
}

const SpellsDashboard: React.FC = () => {
  const [spells, setSpells] = useState<Spell[]>([]);

  useEffect(() => {
    async function loadSpells(): Promise<void> {
      const response = await api.get('/spells/', {
        params: {
          level: 0,
          type: 'Conjuration',
          classe: 'Wizard',
        },
      });

      setSpells(response.data);
    }

    loadSpells();
  }, [spells]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={ImgPotion} alt="Potion" />

          <h1>SPELL LIST</h1>
        </HeaderContent>

        <HeaderOptions>
          <button type="button">ble ble ble</button>
          <p>|</p>
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

        {spells.map(spell => (
          <SpellChart key={spell.id}>
            <img src={ImgBackground} alt="Spell mini" />
            <SpellTitle>
              <strong>{spell.name}</strong>
              {spell.level === 0 ? (
                <p>Cantrip ({spell.components})</p>
              ) : (
                <p>
                  {spell.level}ht level ({spell.components})
                </p>
              )}
            </SpellTitle>
            <FiPlus />
          </SpellChart>
        ))}
      </Spells>

      <OptionsBook>
        <img src={ImgBook} alt="Um livro como imagem de um menu" />
      </OptionsBook>
    </Container>
  );
};

export default SpellsDashboard;
