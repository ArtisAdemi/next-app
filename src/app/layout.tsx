import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/globals/ClientLayout";
import { Footer } from "@/components/globals/Footer";
import Head from "next/head";

const inter = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palushi Epoxy Coatings",
  description:
    "Your trusted partner for high-quality epoxy coatings, concrete polishing solutions, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" as="image" href="/images/simiron.jpg" />
      </Head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
