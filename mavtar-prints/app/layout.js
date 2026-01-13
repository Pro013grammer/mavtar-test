import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mavtar Printing Press Pvt. Ltd. | Premium Digital & Printing Services",
  description: "Premium wedding cards, visiting cards, and digital designs. Download instantly or get professional prints delivered to your doorstep. Trusted by 10,000+ customers.",
  keywords: ["wedding cards", "visiting cards", "printing services", "digital designs", "invitation cards", "Surat", "India"],
  authors: [{ name: "Mavtar Printing Press Pvt. Ltd." }],
  openGraph: {
    title: "Mavtar Printing Press Pvt. Ltd. | Premium Digital & Printing Services",
    description: "Premium wedding cards, visiting cards, and digital designs. Download instantly or get professional prints delivered.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
      >
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
