import { Theme } from "@radix-ui/themes";
import Footer from "./component/Footer";
import { roboto } from "./layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Theme appearance="light" accentColor="orange">
          <main className="bg-white p-32 lg:px-80">{children}</main>
          <WelcomeScreen />
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
