import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { HeaderNav } from "~/components/layout/HeaderNav";
import { Footer } from "~/components/layout/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tommy Wells",
  description: "Tommy Wells.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} bg-slate-900 text-slate-400`}
    >
      <body className="mt-32 flex min-h-screen flex-col gap-y-12 px-4 sm:px-10">
        <HeaderNav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
