import { cinzel } from "./fonts/fonts";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Wilson Soares Film</title>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.css"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking-inline.css"
          crossorigin="anonymous"
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
