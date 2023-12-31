import './global.css';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
});

export const metadata = {
  title: 'Welcome to bee-chapter',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={roboto.className}>{children}</main>
      </body>
    </html>
  );
}
