import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navigation } from "~/components/layout/Navigation";
import { Footer } from "~/components/layout/Footer";

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
      <body className="mt-32 flex min-h-screen flex-col gap-y-12 px-10">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
