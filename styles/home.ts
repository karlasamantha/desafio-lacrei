import styled from 'styled-components';
import Link from 'next/link';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 var(--xxl-large);

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: var(--base) var(--base) 0;
  }
`;

export const H1 = styled.h1`
  font-size: var(--xl-large-size);
  font-weight: 700;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: var(--medium-size);
  }
`;

export const InfoContainer = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: var(--large);

  @media (max-width: 1024px) {
    gap: var(--medium);
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: var(--medium-size);
  color: var(--primary-gray);

  @media (max-width: 1024px) {
    font-size: var(--default-size);
  }
`;

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

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  aspect-ratio: 1 / 1;

  & > img {
    height: 100%;
  }
`;
