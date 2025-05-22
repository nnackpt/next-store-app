import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./theme/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Pakin",
    default: "Pakin | NEXT",
  },
  description: "Next Store - E-commerce website built with Next.js and Material-UI",
  keywords: ["Next.js", "Material-UI", "E-commerce"],
  authors: [{ name: "Pakin", url: "https://github.com/nnackpt" }],

  // favicon
  icons: "@/favicon.ico",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
