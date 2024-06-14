import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Example from "@/components/NavbarTU";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "April Store",
  description: "Clothing e-comerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Example />
        {children}
        <Footer />
      </body>
    </html>
  );
}
