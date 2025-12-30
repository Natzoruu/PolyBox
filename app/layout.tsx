import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
// import { AuroraBackground } from "@/components/ui/aurora-background"; // Parece que no lo usas ahora
import DarkVeil from "@/components/DarkVeil";

const OpenSans = Open_Sans({
  variable: "--font-Open_Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3DVerse – Premium 3D Model Subscription",
  description: "Discover a world of exclusive 3D models built for professional creators. Download, integrate, and bring your ideas to life with 3DVerse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${OpenSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
            <DarkVeil
              hueShift={10}
              noiseIntensity={0}
              scanlineFrequency={10}
              speed={3}
              scanlineIntensity={0}
              warpAmount={0}
              resolutionScale={1}
            />
          </div>
          <main className="relative z-0">
            {children}
          </main>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}