import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio de proyectos CdD-FEST",
  description: "Dashboard interactivo del Portafolio de proyectos CdD-FEST, seguimiento y Registro RSM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
