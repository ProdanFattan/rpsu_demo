import "./globals.css";

import Test from "../components/header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        {/* <Test></Test> */}
        {children}
      </body>
    </html>
  );
}
