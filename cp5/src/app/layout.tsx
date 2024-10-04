"use client"
import NotFound from './not-found';
import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape"
import "./globals.css"
import React from 'react';

export const viewport = {
  initialScale: 1.0,
  width: "device-width",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const is404Page = React.isValidElement(children) && children.type === NotFound;

  return (
    <html lang="pt-br">
      <body>
        {!is404Page && <Cabecalho />}
        {children}
        {!is404Page && <Rodape />}
      </body>
    </html>
  )
}
