import { Container } from "@mui/material";
import { Cormorant_Garamond, cinzel } from "./fonts/fonts";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import Head from "next/head";

export const metadata = {
  title: "Wilson Soares Film",
  description: "Wilson Soares Film wedding film maker",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico",
    other: {
      rel: "logo",
      url: "favicon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
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
