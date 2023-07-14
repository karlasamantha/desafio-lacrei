'use client';
import { usePathname } from 'next/navigation';
import { StyledLink } from '@/styles/nav-link';
import { NavLink } from '@/types';

export default function NavLink({ href, label, isHeaderNav }: NavLink) {
  const pathname = usePathname();

  return (
    <StyledLink
      href={href}
      $active={pathname === href}
      $isheadernav={isHeaderNav}
    >
      {label}
    </StyledLink>
  );
}
