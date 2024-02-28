import '@/src/app/ui/global.css';
import { roboto } from '@/src/app/ui/fonts';
import React from "react";

export const metadata = {
  title: "Defferally",
  description: "Generated with love by DeferAlly",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${roboto.className} antialiased`}>
      {children}
    </div>
  );
}
