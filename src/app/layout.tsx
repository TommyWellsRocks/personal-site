import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { HeaderNav } from "~/components/layout/HeaderNav";
import { Footer } from "~/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

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
      <body className="flex min-h-screen flex-col items-center gap-y-12 px-4 sm:px-10">
        <HeaderNav />
        <main className="w-full max-w-[700px] my-32">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
