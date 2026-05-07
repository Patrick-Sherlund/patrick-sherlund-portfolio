import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { siteMetadata } from "@/content/site";
import { StructuredData } from "@/shared/seo/StructuredData";
import { createPersonJsonLd, createWebsiteJsonLd } from "@/shared/seo/jsonld";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = [createWebsiteJsonLd(), createPersonJsonLd()];

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StructuredData data={jsonLd} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
