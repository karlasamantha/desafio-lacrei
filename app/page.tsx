'use client';

import Image from 'next/image';
import {
  Main,
  InfoContainer,
  H1,
  Text,
  LinksContainer,
  PrimaryLink,
  SecondaryLink,
  ImageContainer,
} from '@/styles/home';

export default function Home() {
  return (
    <Main>
      <InfoContainer>
        <H1>Boas vindas a Lacrei Saúde</H1>
        <Text>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </Text>

        <LinksContainer>
          <PrimaryLink href="/pessoa-usuaria">Pessoa Usuária</PrimaryLink>
          <SecondaryLink href="/profissional">Profissional</SecondaryLink>
        </LinksContainer>
      </InfoContainer>

      <ImageContainer>
        <Image src="/images/home.svg" alt="" priority fill />
      </ImageContainer>
    </Main>
  );
}
