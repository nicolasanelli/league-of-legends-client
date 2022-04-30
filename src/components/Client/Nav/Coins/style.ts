import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 170px;
  display: flex;
`;

export const Divider = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VerticalLine = styled.div`
  height: 75%;
  border-left: 1px solid green;
`;

export const Info = styled.div`
  padding: 21px 13px 21px 13px;
  flex: 5;
  display: flex;
  flex-direction: column;
`;

export const InfoLine = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const IconContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 18px;
  height: auto;
`;

export const Value = styled.div`
  flex: 3;
  padding-left: 5px;
  color: white;
  font-size: 20px;
  font-family: 'Josefin Sans', sans-serif;
`;
