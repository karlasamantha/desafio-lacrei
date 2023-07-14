import styled from 'styled-components';
import Link from 'next/link';

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 450px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: var(--base);
  }
`;

export const PrimaryLink = styled(Link)`
  border-radius: 8px;
  padding: var(--base) var(--medium);
  background: var(--primary-green);
  color: var(--white);
  text-decoration: none;
  text-align: center;
  font-size: var(--small-size);
  font-weight: 700;
  box-shadow: 0px 4px 4px 0px var(--shadow-color);
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SecondaryLink = styled(Link)`
  border-radius: 8px;
  border: 2px solid var(--primary-green);
  padding: var(--base);
  background: var(--white);
  color: var(--primary-green);
  text-decoration: none;
  text-align: center;
  font-size: var(--small-size);
  font-weight: 700;
  box-shadow: 0px 4px 4px 0px var(--shadow-color);
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.8;
  }
`;
