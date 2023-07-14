import styled from 'styled-components';

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

export const Info = styled(Text)`
  border-left: 5px solid var(--primary-green);
  padding-left: var(--medium);

  @media (max-width: 1024px) {
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

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  aspect-ratio: 1 / 1;

  & > img {
    height: 100%;
  }
`;
