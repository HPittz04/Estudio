import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <TopBar />
        <Navbar />
        <main className="pt-[2rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
