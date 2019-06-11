import styled from "styled-components";

export const Header = styled.div`
  background-color: pink;
  flex: 0 1 40px;
`;

export const Body = styled.div`
  background: yellow;
  flex: 1 1 auto;
  position: relative;
`;

export const Footer = styled.div`
  background-color: red;
  flex: 0 1 40px;
`;

export const StaticBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: tomato;
  top: 0;
  left: 0;
`;

export const Field = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-flow: column;
`;
