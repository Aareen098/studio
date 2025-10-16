
import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ClientProviders } from './client-providers';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Aareen's Portfolio",
  description: "A personal portfolio for Aareen, showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <ClientProviders>
          {children}
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  );
}
