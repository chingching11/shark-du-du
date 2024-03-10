import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ 
  weight: ['400', '700'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Shark Du Du",
  description: "Shark Du Du Daycare Center",
  keywords: 'family daycare, daycare, preschool, shark du du'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="container flex mx-auto px-4 py-8 justify-center text-center">         
            {children}
        </main>     
      </body>
    </html>
  );
}
