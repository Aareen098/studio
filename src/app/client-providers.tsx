'use client';

import { ThemeProvider } from "next-themes";
import dynamic from 'next/dynamic';
import { type ReactNode } from "react";

// Dynamically import the FirebaseClientProvider with SSR turned off
const FirebaseClientProvider = dynamic(
  () => import('@/firebase').then(mod => mod.FirebaseClientProvider),
  { ssr: false }
);

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <FirebaseClientProvider>
        {children}
      </FirebaseClientProvider>
    </ThemeProvider>
  );
}
