import styled from "styled-components";

export const HangPartsContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

export const Hang = {
  LeftPart: styled.div`
    position: absolute;
    background-color: brown;
    width: 5px;
    height: 300px;
    bottom: 25px;
    left: 100px;
  `,
  TopPart: styled.div`
    position: absolute;
    background-color: brown;
    width: 300px;
    height: 5px;
    bottom: 325px;
    left: 100px;
  `,
  RightPart: styled.div`
    position: absolute;
    background-color: brown;
    width: 5px;
    height: 300px;
    bottom: 25px;
    right: 100px;
  `,
};

export const Rope = styled.div`
  position: absolute;
  width: 6px;
  height: 20px;
  background-color: grey;
  left: 247px;
  top: 175px;
`;

export const Ground = styled.div`
  position: absolute;
  background-color: green;
  width: 100%;
  height: 25px;
  bottom: 0;
`;
