import type { ReactNode } from "react";
import type { Metadata } from "next";
import { AccessibilityProvider } from "@/features/accessibility";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { siteMetadata } from "@/content/site";
import { StructuredData } from "@/shared/seo/StructuredData";
import { createPersonJsonLd, createWebsiteJsonLd } from "@/shared/seo/jsonld";
import "./globals.css";
import "@/features/accessibility/accessibility.css";

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
        <ThemeProvider>
          <AccessibilityProvider>{children}</AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
