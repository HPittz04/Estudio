import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <TopBar />
        <Navbar />
        <main className="pt-0 sm:pt-[0rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
