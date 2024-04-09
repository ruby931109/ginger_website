import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "./component/Footer";
import WelcomeScreen from "./component/Welcome";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Ginger",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Theme appearance="light" accentColor="orange">
          <NavBar />
          <main className="bg-white p-32">{children}</main>
          <WelcomeScreen />
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
