import type { Metadata } from "next";
import "../styles/main.css";


export const metadata: Metadata = {
  title: "Persona Dashboard",
  description: "A Persona Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
