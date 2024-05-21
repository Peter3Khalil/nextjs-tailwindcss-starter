import '@/app/globals.css';
import { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import React from 'react';
const rubik = Rubik({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  fallback: ['sans-serif'],
});
export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: 'Nextjs Starter Template',
  description: 'Nextjs Starter Template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${rubik.className}`}>{children}</body>
    </html>
  );
}
