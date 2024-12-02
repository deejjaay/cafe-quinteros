import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";
import Footer from "./Footer";


const montserrat = Montserrat({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Exam",
  description: "Nextjs landing page exam",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={montserrat.className}>
        <Theme>
          <NavBar />
            <main>
              {children}
            </main>
          <Footer />
        </Theme>
        </body>
    </html>
  );
}
