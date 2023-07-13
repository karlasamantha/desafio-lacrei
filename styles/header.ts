import styled from 'styled-components';
import Link from 'next/link';
import NavLink from '../components/common/nav-link';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: var(--small) var(--xxl-large);
  font-weight: 700;
  background-color: var(--secondary-gray);

  @media (max-width: 520px) {
    flex-direction: column;
    padding: var(--small) var(--base);
    align-items: center;
  }
`;

export const LogoLink = styled(Link)`
  font-size: var(--large-size);
  color: var(--primary-green);
  text-decoration: none;
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: var(--x-large);
  align-items: center;

  @media (max-width: 520px) {
    gap: var(--base);
  }
`;
