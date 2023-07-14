import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import '../styles/globals.css';

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
      <body className={nunito.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
