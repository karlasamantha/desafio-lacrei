import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desafio Lacrei',
  description: 'Site criado para o desafio front-end do Lacrei Saúde',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
