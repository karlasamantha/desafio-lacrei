'use client';

import { PATHS } from '@/app/utils/constants';
import { StyledHeader, LogoLink, Nav, NavItem } from '@/app/styles/header';

export default function Header() {
  return (
    <StyledHeader>
      <LogoLink href={PATHS.home}>Lacrei</LogoLink>

      <Nav>
        <NavItem href={PATHS.home} label="Home" />
        <NavItem href={PATHS.pessoaUsuaria} label="Pessoa Usuária" />
        <NavItem href={PATHS.profissional} label="Profissional" />
      </Nav>
    </StyledHeader>
  );
}
