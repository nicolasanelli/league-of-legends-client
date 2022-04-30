import * as S from './style';

export const GameMenu = () => {
  const menus = []; // TODO
  return (
    <S.Container>
      <S.Item>
        <S.Icon src={'/icon/profile.png'} />
      </S.Item>
      <S.Item>
        <S.Icon src={'/icon/collection.png'} />
      </S.Item>
      <S.Item>
        <S.Icon src={'/icon/crafting.png'} />
      </S.Item>
      <S.Item>
        <S.Icon src={'/icon/promotion.png'} />
      </S.Item>
      <S.Item>
        <S.Icon src={'/icon/store.png'} />
      </S.Item>
    </S.Container>
  );
};
