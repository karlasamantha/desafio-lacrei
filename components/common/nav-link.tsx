'use client';
import { usePathname } from 'next/navigation';
import { StyledLink } from '@/styles/nav-link';
import { NavLink } from '@/types';

export default function NavLink({ href, label }: NavLink) {
  const pathname = usePathname();

  return (
    <StyledLink href={href} $active={pathname === href}>
      {label}
    </StyledLink>
  );
}
