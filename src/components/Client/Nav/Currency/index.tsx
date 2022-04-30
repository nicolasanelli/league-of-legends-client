import * as S from './style';

export const Currency = () => {
  const rpValue = 2067;
  const beValue = 95279;
  return (
    <S.Container>
      <S.Divider>
        <S.VerticalLine/>
      </S.Divider>
      <S.Info>
        <S.InfoLine>
          <S.IconContainer>
            <S.Icon src={'/icon/riot_points.png'} />
          </S.IconContainer>
          <S.Value>
            {rpValue}
          </S.Value>
        </S.InfoLine>
        <S.InfoLine>
          <S.IconContainer>
            <S.Icon src={'/icon/blue_essence.png'} />
          </S.IconContainer>
          <S.Value>
            {beValue}
          </S.Value>
        </S.InfoLine>
      </S.Info>
    </S.Container>
  );
};
