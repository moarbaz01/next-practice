import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/components/Provider";
import NextTopLoader from "nextjs-toploader";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "@/context/UserContextApi";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Ranjo application",
    template: "%s Ranjo Application",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <NextTopLoader />
          <Toaster />
          <UserContextProvider>{children}</UserContextProvider>
        </Provider>
      </body>
    </html>
  );
}
