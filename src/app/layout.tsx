import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Online Community Tool',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      {/* because of class attribute */}
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, 'bg-white dark:bg-[#62666f]')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={false}
            storageKey="online-community-tool-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
