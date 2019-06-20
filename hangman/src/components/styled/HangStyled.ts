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

export const Person = {
  Head: styled.div`
    background-color: black;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    position: absolute;
    top: 195px;
    left: 235px;
  `,
  Body: styled.div`
    background-color: black;
    height: 80px;
    width: 10px;
    border-radius: 15px;
    position: absolute;
    top: 225px;
    left: 245px;
  `,
  LeftArm: styled.div`
    background-color: black;
    height: 40px;
    width: 10px;
    border-radius: 15px;
    position: absolute;
    top: 225px;
    left: 230px;
    transform: rotate(45deg);
  `,
  RightArm: styled.div`
    background-color: black;
    height: 40px;
    width: 10px;
    border-radius: 15px;
    position: absolute;
    top: 225px;
    left: 260px;
    transform: rotate(135deg);
  `,
  LeftFoot: styled.div`
    background-color: black;
    height: 40px;
    width: 10px;
    border-radius: 15px;
    position: absolute;
    top: 290px;
    left: 230px;
    transform: rotate(45deg);
  `,
  RightFoot: styled.div`
       background-color: black;
    height: 40px;
    width: 10px;
    border-radius: 15px;
    position: absolute;
    top: 290px;
    left: 260px;
    transform: rotate(135deg);
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
