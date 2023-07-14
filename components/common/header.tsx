'use client';

import NavLink from './nav-link';
import { PATHS } from '@/utils/constants';
import { StyledHeader, LogoLink, Nav } from '@/styles/header';

export default function Header() {
  return (
    <StyledHeader>
      <LogoLink href={PATHS.home}>Lacrei</LogoLink>

      <Nav>
        <NavLink isHeaderNav={true} href={PATHS.home} label="Home" />
        <NavLink
          isHeaderNav={true}
          href={PATHS.pessoaUsuaria}
          label="Pessoa Usuária"
        />
        <NavLink
          isHeaderNav={true}
          href={PATHS.profissional}
          label="Profissional"
        />
      </Nav>
    </StyledHeader>
  );
}
