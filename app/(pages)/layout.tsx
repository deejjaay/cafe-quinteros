import { Montserrat } from "next/font/google";
import "../globals.css";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

const montserrat = Montserrat({
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body className={montserrat.className}>
            <NavBar />
                <main>
                    {children}
                </main>
            <Footer />
        </body>
        </html>
    );
}
