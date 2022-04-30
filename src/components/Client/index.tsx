import { useState } from 'react';
import * as S from './style';
import { Coins } from './Nav/Coins';

export const LeagueClient = () => {
  const [background, setBackground] = useState(true);
  const [hasWarning, setHasWarning] = useState(false);

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
        <S.MainMenu />
        <S.EmptySpace />
        <S.GameMenu />
        <Coins />
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
