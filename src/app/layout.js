// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper"; // new wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI GenEssay",
  description:
    "AI GenEssay is your intelligent writing partner, built to help students, professionals, and everyday users craft high-quality, plagiarism-free essays in minutes. Powered by cutting-edge AI, it understands structure, tone, and academic standards to deliver polished, coherent, and fully customizable content—instantly.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://essay-writer-4hcy.vercel.app/" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="AI GenEssay" />
        <meta name="keywords" content="AI essay writer, essay generator, plagiarism free, academic writing, essay tool, AI writing assistant" />
        <meta name="author" content="AI GenEssay Team" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://essay-writer-4hcy.vercel.app/" />
        <meta property="og:title" content="AI GenEssay" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://essay-writer-4hcy.vercel.app/cover.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://essay-writer-4hcy.vercel.app/" />
        <meta name="twitter:title" content="AI GenEssay" />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://essay-writer-4hcy.vercel.app/cover.png" />
        <meta name="twitter:site" content="https://essay-writer-4hcy.vercel.app/" />
        <meta name="twitter:creator" content="@aigenessaywriter" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
