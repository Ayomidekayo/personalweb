import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors">
        {children}
      </body>
    </html>
  );
}
