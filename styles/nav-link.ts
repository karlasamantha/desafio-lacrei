import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)<{
  $active?: boolean;
  $isheadernav?: boolean;
}>`
  font-weight: ${(props) => (props.$active ? '700' : '400')};
  text-decoration: none;
  color: ${(props) =>
    props.$active && props.$isheadernav
      ? 'var(--primary-green)'
      : 'var(--default-black)'};
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 520px) {
    font-size: var(--x-small-size);
  }
`;
