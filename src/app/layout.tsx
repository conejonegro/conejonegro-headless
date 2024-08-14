import type { Metadata } from "next";
import  {Montserrat}  from 'next/font/google'
import "./globals.css";
import { MainNav } from "@/components/navigation/MainNav";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat ({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portfolio | conejoNegro ",
  description: "Portfolio de Conejo Negro: desarrollador web especializado en React.js, Next.js y WordPress. Proyectos innovadores y soluciones personalizadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>
        <MainNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
