"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide Navbar on `/deploy` or `/deploy/...`
  const hideNavbar = pathname.startsWith("/deploy");

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}
