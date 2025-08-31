import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarDemo } from "@/components/elements/sidebardemo";
import Footer from "@/components/elements/footer";

const inter = Inter({ subsets: ["latin"] });

// 🔑 Add this
export const metadata = {
  title: "CoderRoom - By Mayank&Co.",
  description: "Turning ideas into Reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="flex">
          <div className="side flex-none">
            <SidebarDemo />
          </div>
          <div className="child flex-1 overflow-x-hidden">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
