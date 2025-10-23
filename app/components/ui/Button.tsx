import styled from "styled-components";

/**
 * Button component
 * - Accepts native button props (children, onClick, disabled)
 * - Uses theme tokens for color, spacing and radius
 */
export const Button = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent2};
    color: ${({ theme }) => theme.colors.bg};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
