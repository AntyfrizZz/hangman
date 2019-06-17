import styled, { css } from "styled-components";

export const LetterCard = styled.div<{ disabled: boolean }>`
  width: 20px;
  height: 20px;
  padding: 5px;
  margin: 5px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid black;
  -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: grey;
      border-color: grey;
      -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.25);
    `};
`;
