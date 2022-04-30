import { useState } from 'react';
import * as S from './style';
import { Currency } from './Nav/Currency';
import { GameMenu } from './Nav/GameMenu';
import { MainMenu } from './Nav/MainMenu';

export const LeagueClient = () => {
  const [background, setBackground] = useState(false);
  const [hasWarning, setHasWarning] = useState(true);

  const toggleWarning = () => {
    setHasWarning(!hasWarning);
  };

  const toggleBackground = () => {
    setBackground(!background);
  };

  return (
    <S.Container background={background}>
      <S.Nav>
        <S.PlayButton />
        {hasWarning && <S.Warning />}
        <MainMenu />
        <S.EmptySpace />
        <GameMenu />
        <Currency />
      </S.Nav>
      <S.Content>
        <S.Main>
          <>
            <button onClick={toggleWarning}>Toggle Warning</button>
            <button onClick={toggleBackground}>Toggle Background</button>
          </>
        </S.Main>
        <S.Sidebar>
          <S.User />
        </S.Sidebar>
      </S.Content>
    </S.Container>
  );
};
