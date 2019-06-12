import styled, { css } from "styled-components";

export const LetterCard = styled.div<{ disabled: boolean }>`
  width: 20px;
  height: 40px;
  cursor: pointer;
  border: 1px solid black;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `};
`;
