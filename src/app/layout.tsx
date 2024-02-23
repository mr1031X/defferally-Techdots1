import type { Metadata } from "next";
import '@/src/app/ui/global.css';
import { roboto } from './ui/fonts';

export const metadata: Metadata = {
  title: "1031Demo",
  description: "Generated with love by DeferAlly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
