import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Прима",
  description: "Забронируй квартиру в Нижнем Новгороде",
};


const manrope = localFont({src: './fonts/Manrope-VariableFont_wght.ttf', variable: '--font-manrope'});
const melodrama = localFont({src: './fonts/Melodrama-Variable.ttf', variable: '--font-melodrama'});


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      {/*<body className={`${geistSans.variable} ${geistMono.variable}`}>*/}
      <body className={`${manrope.variable} ${melodrama.variable}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
