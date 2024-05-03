import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-slate-900">
          <div className="flex-none w-60 min-h-screen bg-slate-800 p-5">
            <Sidebar />
          </div>
          <div className="flex-1 w-64 p-4">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
