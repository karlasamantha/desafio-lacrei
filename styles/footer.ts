import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 1px solid var(--secondary-green);
  margin: 0 var(--x-large);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--medium);

  @media (max-width: 520px) {
    margin: 0 var(--base);
  }
`;

// Nav element styles
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: var(--large);
  gap: 2.5rem;

  @media (max-width: 520px) {
    margin-top: var(--base);
    flex-direction: column;
    gap: 0.25rem;
  }
`;

// Icons list styles
export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 2rem;
`;

// Sign text
export const SignedText = styled.p`
  font-size: var(--x-small-size);
  color: var(--primary-gray);
`;
