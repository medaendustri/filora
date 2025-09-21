import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filora Yazılım - Modern Yazılım Çözümleri",
  description:
    "Dijital dünyada başarınızı artıran, yenilikçi yazılım çözümleri ile işinizi geleceğe taşıyoruz. Web geliştirme, mobil uygulama, e-ticaret ve danışmanlık hizmetleri.",
  keywords:
    "yazılım, web geliştirme, mobil uygulama, e-ticaret, UI/UX tasarım, danışmanlık, React, Next.js",
  authors: [{ name: "Filora Yazılım" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14b8a6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
