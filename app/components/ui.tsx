import styled, { css } from "styled-components";
import { BorderRadius } from "styles/Base";

export const cardStyles = css`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${BorderRadius};
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0 8px 24px rgba(0,0,0,.06);
`;

export const buttonStyles = css`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${BorderRadius};
  transition: transform 120ms ease, background 120ms ease;
  &:hover { transform: translateY(-1px); background: ${({ theme }) => theme.colors.accentDark}; }
  &:active { transform: translateY(0); }
`;

export const Card = styled.article`
  ${cardStyles}
`;

export const Button = styled.button`
  ${buttonStyles}
`;
