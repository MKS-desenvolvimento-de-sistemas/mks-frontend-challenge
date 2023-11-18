import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/providers/Providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Front-End Challenge",
  description: "My resolution of front end challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="pt-br">
        <body className={montserrat.className}>{children}</body>
      </html>
    </Providers>
  );
}
