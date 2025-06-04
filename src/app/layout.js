import { Red_Hat_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pivelski",
  description: "Brazilian filmmaker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
