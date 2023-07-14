'use client';

import Image from 'next/image';
import { Main, InfoContainer, H1, Info, ImageContainer } from '@/styles/common';

export default function PessoaUsuariaPage() {
  return (
    <Main>
      <InfoContainer>
        <H1>Pessoa Usuária</H1>
        <Info>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </Info>
      </InfoContainer>

      <ImageContainer>
        <Image src="/images/pessoa-usuaria.svg" alt="" priority fill />
      </ImageContainer>
    </Main>
  );
}
