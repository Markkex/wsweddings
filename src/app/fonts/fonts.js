import { Cormorant_Garamond, Cinzel } from "next/font/google";

//small text
export const CormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

//titles and menu
export const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
