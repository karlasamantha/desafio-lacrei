'use client';

// import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FacebookIcon from '../icons/facebook-icon';
import InstagramIcon from '../icons/instagram-icon';
import LinkedinIcon from '../icons/linkedin-icon';
import {
  StyledFooter,
  FooterNav,
  StyledLink,
  StyledList,
  StyledListItem,
  SignedText,
} from '@/app/styles/footer';

const paths = {
  home: '/',
  pessoaUsuaria: '/pessoa-usuaria',
  profissional: '/profissional',
};

export default function Footer() {
  const pathname = usePathname();

  return (
    <StyledFooter>
      <FooterNav>
        <StyledLink href={paths.home} $active={pathname === paths.home}>
          Home
        </StyledLink>
        <StyledLink
          href={paths.pessoaUsuaria}
          $active={pathname === paths.pessoaUsuaria}
        >
          Pessoa Usuária
        </StyledLink>
        <StyledLink
          href={paths.profissional}
          $active={pathname === paths.profissional}
        >
          Profissional
        </StyledLink>
      </FooterNav>

      <StyledList>
        <StyledListItem>
          <a target="_blank" href="https://www.instagram.com/lacrei.saude">
            <InstagramIcon stroke="#018762" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a target="_blank" href="https://www.facebook.com/lacrei.saude">
            <FacebookIcon stroke="#018762" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a target="_blank" href="https://www.linkedin.com/company/lacrei">
            <LinkedinIcon stroke="#018762" />
          </a>
        </StyledListItem>
      </StyledList>

      <SignedText>Desafio Front-end Lacrei</SignedText>
    </StyledFooter>
  );
}
