/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { cx } from "../utils";
import "../styles/globals.css";
import { Oswald } from 'next/font/google'
import Footer from "../components/footer";
import siteMetadata from "../utils/siteMetaData";
import Script from "next/script";
import { ReactNode } from "react";
import Nav from '@/components/nav'


const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-in",
})

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};


type RootLayoutProps = {
  children: ReactNode;
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cx(
          oswald.variable,
          oswald.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
          } else {
          document.documentElement.classList.remove('dark')
          }`}
        </Script>
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  );
}