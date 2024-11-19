import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { HeaderNav } from "~/components/layout/HeaderNav";
import { Footer } from "~/components/layout/Footer";
import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tommy Wells",
  description: "Tommy Wells.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inMeasureScript = `(function () {
  if (!document.getElementById("im-script")) {
    const element = document.createElement("script");
    element.type = "text/javascript";
    element.async = true;
    element.src = "https://www.inmeasure.com/api/v1/script/da01dd72-9d43-4717-9230-df4b28576796";
    element.id = "im-script";
    document.head.appendChild(element);
  }
})();`

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
        <Script
          id="inmeasure-script"
          dangerouslySetInnerHTML={{
            __html: inMeasureScript,
          }}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
