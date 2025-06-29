
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Nighto",
  description: "Nighto is a modern clipping site for anyone want to make money.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
      
        {children}
        <Analytics/>
       
          
      </body>
      
    </html>
  );
}