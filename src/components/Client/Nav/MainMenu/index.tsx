import * as S from './style';

export const MainMenu = () => {
  const menus = [];

  return (
    <S.Container>
      <S.Item>
        Início
      </S.Item>
      <S.Item>
        TFT
      </S.Item>
      <S.Item>
        Clash
      </S.Item>
    </S.Container>
  );
};
