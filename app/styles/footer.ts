import styled from 'styled-components';
import Link from 'next/link';

export const StyledFooter = styled.footer`
  border-top: 1px solid var(--tertiary-green);
  margin: 0 var(--x-large-margin);

  @media (max-width: 520px) {
    margin: 0 1rem;
  }
`;

// Nav element styles
export const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: var(--medium-margin);
  gap: 2.5rem;

  @media (max-width: 520px) {
    margin-top: 1rem;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const StyledLink = styled(Link)<{ $active?: boolean }>`
  font-weight: ${(props) => (props.$active ? '700' : '400')};
  margin-right: var(--large-margin);
  text-decoration: none;
  color: var(--default-black);
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 520px) {
    font-size: 0.875rem;
  }
`;

// Icons list styles
export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: var(--medium-margin);
  margin-bottom: var(--medium-margin);
`;

export const StyledListItem = styled.li`
  margin-right: var(--medium-margin);
`;

// Sign text
export const SignedText = styled.p`
  font-size: var(--x-small-size);
  color: default-gray;
`;
