import { useState } from 'react';
import * as S from './style';

export const LeagueClient = () => {
  const [hasWarning, setHasWarning] = useState(false);

  const toggleWarning = () => {
    setHasWarning(!hasWarning);
  };

  return (
    <S.Container>
      <S.Nav>
        <S.PlayButton />
        {hasWarning && <S.Warning />}
        <S.MainMenu />
        <S.EmptySpace />
        <S.GameMenu />
        <S.Money />
      </S.Nav>
      <S.Content>
        <S.Main>
          <button onClick={toggleWarning}>Toggle Warning</button>
        </S.Main>
        <S.Sidebar>
          <S.User />
        </S.Sidebar>
      </S.Content>
    </S.Container>
  );
};
