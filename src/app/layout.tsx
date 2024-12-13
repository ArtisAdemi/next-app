import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/globals/ClientLayout";

const inter = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palushaj Epoxy Flooring",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
