'use client';

import FacebookIcon from '../icons/facebook-icon';
import InstagramIcon from '../icons/instagram-icon';
import LinkedinIcon from '../icons/linkedin-icon';
import { StyledFooter, Nav, StyledList, SignedText } from '@/app/styles/footer';
import NavLink from './nav-link';
import { PATHS } from '@/app/utils/constants';

export default function Footer() {
  return (
    <StyledFooter>
      <Nav>
        <NavLink href={PATHS.home} label="Home" />
        <NavLink href={PATHS.pessoaUsuaria} label="Pessoa Usuária" />
        <NavLink href={PATHS.profissional} label="Profissional" />
      </Nav>

      <StyledList>
        <li>
          <a target="_blank" href="https://www.instagram.com/lacrei.saude">
            <InstagramIcon stroke="#018762" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/lacrei.saude">
            <FacebookIcon stroke="#018762" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/company/lacrei">
            <LinkedinIcon stroke="#018762" />
          </a>
        </li>
      </StyledList>

      <SignedText>Desafio Front-end Lacrei</SignedText>
    </StyledFooter>
  );
}
