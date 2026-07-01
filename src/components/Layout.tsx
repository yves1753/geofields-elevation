import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { LoadingScreen } from "./LoadingScreen";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
