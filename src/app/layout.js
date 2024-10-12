import { cinzel } from "./fonts/fonts";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Head from "next/head";

export const metadata = {
  title: "Wilson Soares Film",
  description: "Wilson Soares Film wedding film maker",
  icons: {
    icon: "icon.jpg",
    shortcut: "icon.jpg",
    apple: "icon.jpg",
    other: {
      rel: "logo",
      url: "icon.jpg",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={cinzel.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
