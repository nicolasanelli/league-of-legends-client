import styled from 'styled-components';
import { Colors } from '../../../../constans/colors';

export const Container = styled.div`
  height: 100%;
  width: 240px;
  display: flex;
  align-content: center;
  justify-content: right;
  padding: 25px 1px 25px 34px;
`;

export const ButtonArea = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 23px;
  background-color: #0f0e0f;
`;

export const ButtonImg = styled.img`
  height: 52px;
  width: 52px;
  position: relative;
  left: -24px;
  top: -3px;
  float: left;
`;

export const ButtonBorder = styled.div`
  height: 100%;
  width: 100%;
  padding: 2px 4px 4px 14px;
  border-top: 1px solid ${Colors.GOLD};
  border-right: 1px solid ${Colors.GOLD};
  border-bottom: 1px solid ${Colors.GOLD};
`;

export const Button = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: radial-gradient(22% 110% at left, transparent 50%, ${Colors.HAPPY_BLUE} 50%);
  padding: 2px;
`;

export const Arrows = styled.div`
  position: relative;
  height: 100%;
  width: 20px;
  float: right;
  top: -41px;
`;
export const ArrowUp = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${Colors.HAPPY_BLUE};
  padding-top: 2px;

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 21px 21px 0;
    border-color: transparent #0f0e0f transparent transparent;
    right: 0;
    top: 0;
    position: absolute;
  }
`;
export const ArrowDown = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${Colors.HAPPY_BLUE};

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 19px 0 0;
    border-color: transparent #0f0e0f transparent transparent;
    right: 0;
    bottom: 0;
    position: absolute;
  }
`;

export const SubArrowUp = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Colors.DARK_GRAY};

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 24px 23.5px 0;
    border-color: transparent ${Colors.HAPPY_BLUE} transparent transparent;
    right: 0;
    top: 0;
    position: absolute;
  }
`;
export const SubArrowDown = styled.div`
  height: 100%;
  width: 100%;
  //background-color: ${Colors.DARK_GRAY};

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 18px 17px 0px 3px;
    border-color: transparent ${Colors.DARK_GRAY} transparent transparent;
    right: 0;
    bottom: 0;
    position: absolute;
    transform: rotate(180deg) translateY(2.5px);
  }
`;

export const ButtonText = styled.div`
  height: 100%;
  width: 100%;
  background: radial-gradient(23% 120% at left, transparent 50%, ${Colors.DARK_GRAY} 50%);
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
  padding: 3px 40px 0 2px;
`;
