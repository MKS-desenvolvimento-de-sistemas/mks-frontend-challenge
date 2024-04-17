import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Providers from "@/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "Desafio Front-end NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          <Navbar />
          { children }
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
