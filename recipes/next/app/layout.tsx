import './globals.css';
import type { ReactNode } from 'react';
import FluentRoot from './FluentRoot';

export const metadata = {
  title: 'Puck (with Fluent UI)',
  description: 'Puck recipe with Fluent UI integration',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FluentRoot>{children}</FluentRoot>
      </body>
    </html>
  );
}
