import { Metadata } from "next";
import React from "react";
import './globals.css';

export const metadata: Metadata = {
  title: "Worlds in Collision",
};

export default function RootLayout({
  children, }: {
    children: React.ReactNode;

  }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-100 p-4">
        {children}
      </body>
    </html>
  );
}
