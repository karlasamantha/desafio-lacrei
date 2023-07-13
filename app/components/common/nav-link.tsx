'use client';
import { usePathname } from 'next/navigation';
import { StyledLink } from '@/app/styles/nav-link';
import { NavLink } from '@/app/types';

export default function NavLink({ href, label }: NavLink) {
  const pathname = usePathname();

  return (
    <StyledLink href={href} $active={pathname === href}>
      {label}
    </StyledLink>
  );
}
