import * as S from './style';

export const PlayButton = () => {
  const enabled = false;

  return (
    <S.Container>
      <S.ButtonArea>
        <S.ButtonImg src={'/icon/lol.png'} />
        <S.ButtonBorder>
          <S.Button>
            <S.ButtonText>
              JOGAR
            </S.ButtonText>
          </S.Button>
           <S.Arrows>
             <S.ArrowUp>
               <S.SubArrowUp/>
             </S.ArrowUp>
             <S.ArrowDown>
               <S.SubArrowDown/>
             </S.ArrowDown>
           </S.Arrows>
         </S.ButtonBorder>
      </S.ButtonArea>
    </S.Container>
  );
};
