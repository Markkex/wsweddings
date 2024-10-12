import { cinzel } from "./fonts/fonts";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";

export const metadata = {
  title: "Wilson Soares Film",
  description: "Wilson Soares Film wedding film maker",
  icons: {
    icon: "./icon.ico",
    shortcut: "./icon.ico",
    apple: "./icon.ico",
    other: {
      rel: "logo",
      url: "./icon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
