import styled from 'styled-components';
import { Colors } from '../../constans/colors';

const opacity = 1;

export const Container = styled.div`
  height: 900px;
  min-width: 1600px;
  width: 1600px;
  background: ${(props) => (props.background ? 'url("/store.png") no-repeat' : 'none')};
  background-position-y: -3px;
  background-position-x: -1px;

  border-top: 2px solid ${Colors.GOLD};
  border-left: 1px solid ${Colors.DARK_GRAY};
  border-right: 1px solid ${Colors.DARK_BLUE};
  border-bottom: 1px solid ${Colors.DARK_BLUE};
`;

export const Nav = styled.nav`
  height: 100px;
  width: calc(1598px - 280px);
  position: absolute;
  border-bottom: 1px solid ${Colors.DARK_GRAY};
  display: flex;
  z-index: 99;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  flex: 1;
  flex-basis: calc(1598px - 280px);
  flex-grow: 0;
  padding-top: 101px;
  background-color: #0f0e0f;
  // background-color: ${Colors.DARK_BLUE};
  opacity: ${opacity};
`;

export const Sidebar = styled.div`
  height: 100%;
  width: 280px;
   background-color: ${Colors.DARK_BLUE};
  opacity: ${opacity};
`;

export const EmptySpace = styled.div`
  flex: 1;
`;

export const PlayButton = styled.div`
  height: 100%;
  width: 240px;
  background-color: orangered;
  opacity: ${opacity};
`;

export const Warning = styled.div`
  height: 100%;
  width: 75px;
  background-color: darkred;
  opacity: ${opacity};
`;

export const User = styled.div`
  height: 100px;
  width: 280px;
   background-color: ${Colors.DARK_BLUE};
  border-bottom: 1px solid ${Colors.DARK_GRAY};
  opacity: ${opacity};
`;
